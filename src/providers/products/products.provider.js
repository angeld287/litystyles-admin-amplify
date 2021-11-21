import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem
} from '../../utils/Items/Utils'
import { getList, createItem } from "../../services/AppSync";
import { listProducts } from "../../graphql/customQueries";
import { createProductCategory, createProductSubCategory, createProduct } from "../../graphql/mutations";
import { transformAndUploadImages } from "../../services/S3";

export const ProductContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    itemsLoading: false,
    addItem: () => { },
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
        const images = await transformAndUploadImages("PRODUCTOS", item.name, item.image);
        const object = { packagingformat: item.packagingformat, name: item.name, cost: item.cost, image: images.key_ori.key, categoryId: item.category, subCategoryId: item.subcategory };
        const product = await createItem('createProduct', createProduct, object);
        object.id = product.id;

        const category = await createItem('createProductCategory', createProductCategory, { productCategoryProductId: product.id, productCategoryCategoryId: item.category });
        object.category = category.id;

        if (item.subcategory !== undefined && item.subcategory !== '') {
            const subcategory = await createItem('createProductSubCategory', createProductSubCategory, { productSubCategoryProductId: product.id, productSubCategorySubcategoryId: item.subcategory });
            object.subcategory = subcategory.id;
        }

        setItems(utilAddItem(items, object))

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
                setItems([...items, ...result.items])
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