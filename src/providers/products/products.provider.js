import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem, utilEditItem
} from '../../utils/Items/Utils'
import { getList, createUpdateItem } from "../../services/AppSync";
import { listProducts } from "../../graphql/customQueries";
import { createProduct, createProductCategory, createProductSubCategory, updateProduct, updateProductCategory, updateProductSubCategory } from '../../graphql/customMutations'
import { deleteImages, transformAndUploadImages } from "../../services/S3";
import moment from "moment";

export const ProductContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    itemsLoading: false,
    addItem: () => { },
    editItem: () => { },
    updateDeleteItem: () => { },
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
            const input = { packagingformat: item.packagingformat, name: item.name, cost: item.cost, categoryId: item.category, subCategoryId: item.subcategory };

            const images = await transformAndUploadImages("PRODUCTOS", item.name, item.image);
            if (images.key_ori !== false) {
                input.image = images.key_ori.key;
            }

            object = await createUpdateItem('createProduct', createProduct, input);
            if (object !== false) {
                const category = await createUpdateItem('createProductCategory', createProductCategory, { productCategoryProductId: object.id, productCategoryCategoryId: item.category });
                object.category.items.push(category)

                if (item.subcategory !== undefined && item.subcategory !== '') {
                    const subcategory = await createUpdateItem('createProductSubCategory', createProductSubCategory, { productSubCategoryProductId: object.id, productSubCategorySubcategoryId: item.subcategory });
                    object.subcategory.items.push(subcategory)
                }
            }
        } catch (e) {
            console.log("Error al crear un Producto: ", e)
            object = false
        }

        if (object !== false) {
            setItems(utilAddItem(items, object))
        }

        return object
    };

    const editItem = async item => {
        let object, category, subcategory;
        let bedit = {}

        try {
            const input = { id: item.id, packagingformat: item.packagingformat, name: item.name, cost: item.cost, image: item.image };
            bedit = items.find(_ => _.id === input.id);

            if (bedit.image !== input.image) {
                if (bedit.image !== null) await deleteImages(input.image);

                const deleteResult = await deleteImages(input.image);
                if (deleteResult.key_ori !== false) {
                    const images = await transformAndUploadImages("PRODUCTOS", item.name, item.image);
                    input.image = images.key_ori.key;
                }
            }

            object = await createUpdateItem('updateProduct', updateProduct, input);
            if (object !== false) {
                if (bedit.category.items.length === 0) {
                    category = await createUpdateItem('createProductCategory', createProductCategory, { productCategoryProductId: object.id, productCategoryCategoryId: item.category.items[0].category.id });
                } else if (typeof item.category === "string" && bedit.category.items[0].category.id !== item.category) {
                    category = await createUpdateItem('updateProductCategory', updateProductCategory, { id: object.category.items[0].id, productCategoryCategoryId: item.category });
                    if (category !== false) object.category.items.splice(0, 1);
                }

                if (category !== false) {
                    if (bedit.subcategory.items.length === 0) {
                        subcategory = await createUpdateItem('createProductSubCategory', createProductSubCategory, { productSubCategoryProductId: object.id, productSubCategorySubcategoryId: item.subcategory.items[0].subcategory.id });
                    } else if (typeof item.subcategory === "string" && bedit.subcategory.items[0].subcategory.id !== item.subcategory) {
                        subcategory = await createUpdateItem('updateProductSubCategory', updateProductSubCategory, { id: object.subcategory.items[0].id, productSubCategorySubcategoryId: item.subcategory });
                        if (subcategory !== false) object.subcategory.items.splice(0, 1);
                    }
                }
            }

            if (category !== false) object.category.items.push(category);
            if (subcategory !== false) object.subcategory.items.push(subcategory);

            if (category === false || subcategory === false) object = false;

        } catch (e) {
            console.log(e)
            object = false
        }

        if (object !== false) {
            setItems(utilEditItem(items, object))
        }

        return object
    };

    const updateDeleteItem = async (id) => {
        let object, bedit;

        try {
            const input = { id: id, deleted: true, deletedAt: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z' };
            bedit = items.find(_ => _.id === input.id);

            if (typeof bedit.image === "string" && bedit.image !== "") await deleteImages(input.image);

            object = await createUpdateItem('updateProduct', updateProduct, input);
        } catch (e) {
            console.log(e);
            object = false
        }

        if (object !== false) {
            setItems(utilRemoveItem(items, bedit));
        }

        return object;
    }

    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        let didCancel = false;
        setItemsLoading(true);
        const fetch = async () => {
            var result = [];
            var _items = [];

            try {
                result = await getList('listProducts', listProducts, { filter: { deleted: { ne: true } } });
                _items = result.items;
                while (_items.length < 10 && result.nextToken !== null) {
                    result = await getList('listProducts', listProducts, { filter: { deleted: { ne: true } }, nextToken: result.nextToken });
                    _items = [..._items, ...result.items];
                }
            } catch (e) {
                console.log(e)
            }
            if (!didCancel) {
                //.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                setItems(_items)
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
                result = await getList('listProducts', listProducts, { filter: { deleted: { ne: true } }, nextToken: nextToken });
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
                updateDeleteItem,
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