import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem
} from '../../utils/Items/Utils'
import { getList, createItem } from "../../services/AppSync";
import { listProducts } from "../../graphql/queries";
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
        const pobject = { packagingformat: item.packagingformat, name: item.name, cost: item.cost, image: images.key_ori.key };
        const product = await createItem('createProduct', createProduct, pobject);

        await createItem('createProductCategory', createProductCategory, { productCategoryProductId: product.id, productCategoryCategoryId: item.category });

        if (item.subcategory !== undefined && item.subcategory !== '') {
            await createItem('createProductSubCategory', createProductSubCategory, { productSubCategoryProductId: product.id, productSubCategorySubcategoryId: item.subcategory })
        }

        setItems(utilAddItem(items, item))
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
                setItems(result.items.map(e => ({ cost: e.cost, name: e.name, image: e.image, id: e.id, deleted: e.deleted })))
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
                setItems([...items, ...result.items.map(e => ({ cost: e.cost, name: e.name, image: e.image, id: e.id, deleted: e.deleted }))])
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