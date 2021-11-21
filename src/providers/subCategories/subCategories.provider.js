import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem
} from '../../utils/Items/Utils'
import { getList, createUpdateItem } from "../../services/AppSync";
import { listSubCategorys } from "../../graphql/queries";
import { createSubCategory } from "../../graphql/mutations";

export const SubCategoriesContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    itemsLoading: false,
    addItem: () => { },
    removeItem: () => { },
    itemsCount: 0,
    getItemsNextToken: () => { },
});

const SubCategorieProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [nextToken, setNextToken] = useState(null);
    const [itemsLoading, setItemsLoading] = useState(false);

    const addItem = async item => {
        //const productObject = { packagingformat: packagingformat.current.value, name: name.current.value, cost: cost.current.value, image: _image.key };
        //const product = await createUpdateItem('createProduct', createProduct, { productSubCategoryProductId: "", productSubCategorySubcategoryId: item.subcategory })
        await createUpdateItem('createSubCategory', createSubCategory, { productCategoryProductId: 'p.data.createProduct.id', productCategoryCategoryId: 'category.current.value' });

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
                result = await getList('listSubCategorys', listSubCategorys);
            } catch (e) {
                console.log(e)
            }

            if (!didCancel) {
                setItems(result.items.map(e => ({ code: e.code, name: e.name, id: e.id, deleted: e.deleted })))
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
                result = await getList('listSubCategorys', listSubCategorys, { nextToken: nextToken });
                setItems([...items, ...result.items.map(e => ({ code: e.code, name: e.name, id: e.id, deleted: e.deleted }))])
                setNextToken(result.nextToken);
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <SubCategoriesContext.Provider
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
        </SubCategoriesContext.Provider>
    );
};

SubCategorieProvider.propTypes = {
    children: PropTypes.any
}

export default SubCategorieProvider;