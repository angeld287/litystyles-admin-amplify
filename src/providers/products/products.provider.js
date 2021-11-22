import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem
} from '../../utils/Items/Utils'
import { getList, createUpdateItem } from "../../services/AppSync";
import { listProducts } from "../../graphql/customQueries";
import { createProduct, createProductCategory, createProductSubCategory, updateProduct, updateProductCategory, updateProductSubCategory } from '../../graphql/customMutations'
import { deleteImages, transformAndUploadImages } from "../../services/S3";

export const ProductContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    itemsLoading: false,
    addItem: () => { },
    editItem: () => { },
    removeItem: () => { },
    itemsCount: 0,
    getItemsNextToken: () => { },
});

const ProductProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [nextToken, setNextToken] = useState(null);
    const [itemsLoading, setItemsLoading] = useState(false);

    const addItem = async item => {
        let object = {};
        try {
            const images = await transformAndUploadImages("PRODUCTOS", item.name, item.image);
            const input = { packagingformat: item.packagingformat, name: item.name, cost: item.cost, image: images.key_ori.key, categoryId: item.category, subCategoryId: item.subCategory };
            object = await createUpdateItem('createProduct', createProduct, input);

            const category = await createUpdateItem('createProductCategory', createProductCategory, { productCategoryProductId: object.id, productCategoryCategoryId: item.category });
            object.category.items.push(category)

            if (item.subCategory !== undefined && item.subCategory !== '') {
                const subcategory = await createUpdateItem('createProductSubCategory', createProductSubCategory, { productSubCategoryProductId: object.id, productSubCategorySubcategoryId: item.subCategory });
                object.subCategory.items.push(subcategory)
            }
        } catch (e) {
            console.log(e)
            object = false
        }

        if (object !== false) {
            setItems(utilAddItem(items, object))
        }

        return object
    };

    const editItem = async item => {
        let object = {};
        let bedit = {}

        try {
            const input = { id: item.id, packagingformat: item.packagingformat, name: item.name, cost: item.cost, image: item.image, categoryId: item.category, subCategoryId: item.subCategory };
            bedit = items.find(_ => _.id === input.id);

            if (bedit.image !== input.image) {
                await deleteImages(input.image);
                const images = await transformAndUploadImages("PRODUCTOS", item.name, item.image);
                input.image = images.key_ori.key;
            }

            object = await createUpdateItem('updateProduct', updateProduct, input);

            if (item.category.items.length === 0) {
                const category = await createUpdateItem('createProductCategory', createProductCategory, { productCategoryProductId: object.id, productCategoryCategoryId: item.category });
                object.category.items.push(category)
            } else if (bedit.category.items[0].id !== item.category.items[0].id) {
                const category = await createUpdateItem('updateProductCategory', updateProductCategory, { id: object.category.items[0].id, productCategoryProductId: object.id, productCategoryCategoryId: item.category });
                object.category.items.splice(0, 1);
                object.category.items.push(category)
            }

            if (item.subCategory.items.length === 0) {
                const subCategory = await createUpdateItem('createProductSubCategory', createProductSubCategory, { productSubCategoryProductId: object.id, productSubCategorySubcategoryId: item.subCategory });
                object.subcategory.items.push(subCategory)
            } else if (bedit.subCategory.items[0].id !== item.subCategory.items[0].id) {
                const subCategory = await createUpdateItem('updateProductSubCategory', updateProductSubCategory, { id: object.subcategory.items[0].id, productSubCategoryProductId: object.id, productSubCategorySubcategoryId: item.subCategory });
                object.subcategory.items.splice(0, 1);
                object.subcategory.items.push(subCategory)
            }

        } catch (e) {
            console.log(e)
            object = false
        }

        if (object !== false) {
            setItems(utilRemoveItem(items, bedit))
            setItems(utilAddItem(items, object))
        }

        return object
    };

    const removeItem = item => setItems(utilRemoveItem(items, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        let didCancel = false;
        setItemsLoading(true);
        const fetch = async () => {
            var result = [];

            try {
                result = await getList('listProducts', listProducts);
            } catch (e) {
                console.log(e)
            }

            if (!didCancel) {
                setItems(result.items)
                setNextToken(result.nextToken);
                setItemsLoading(false);
            }
        };

        fetch();

        return () => {
            didCancel = true;
            setItemsLoading(false);
        };
    }, []);

    useEffect(() => {
        setItemsCount(getItems(items));
    }, [items]);

    const getItemsNextToken = async () => {
        var result = [];

        if (nextToken !== null) {
            try {
                result = await getList('listProducts', listProducts, { nextToken: nextToken });
                setItems([...items, ...result.items.filter(_ => items.find(x => x.id === _.id) === undefined)])
                setNextToken(result.nextToken);
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <ProductContext.Provider
            value={{
                hidden,
                toggleHidden,
                items,
                addItem,
                editItem,
                removeItem,
                itemsCount,
                getItemsNextToken,
                itemsLoading,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: PropTypes.any
}

export default ProductProvider;