import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem
} from '../../utils/Items/Utils'
import { getList } from "../../services/AppSync";
import { listProducts } from "../../graphql/queries"

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

    const addItem = item => {
        setItems(utilAddItem(items, item))
    };
    const removeItem = item => setItems(utilRemoveItem(items, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        let didCancel = false;

        const fetch = async () => {
            var result = [];

            try {
                result = await getList('listProducts', listProducts);
            } catch (e) {
                console.log(e)
            }

            if (!didCancel) {
                const _r = [];
                result.forEach(e => {
                    _r.push({ cost: e.cost, name: e.name, image: e.image, id: e.id, deleted: e.deleted })
                });
                setItems(_r)
            }
        };

        fetch();

        return () => {
            didCancel = true;
        };
    }, []);

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
                itemsCount,
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