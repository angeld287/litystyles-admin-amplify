import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem
} from './products.utils'

export const ProductContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    addItem: () => { },
    removeItem: () => { },
    itemsCount: 0,
});

const ProductProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    const addItem = item => setItems(utilAddItem(items, item));
    const removeItem = item => setItems(utilRemoveItem(items, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setItemsCount(getItems(items));
    }, [items]);

    return (
        <ProductContext.Provider
            value={{
                hidden,
                toggleHidden,
                items,
                addItem,
                removeItem,
                itemsCount
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