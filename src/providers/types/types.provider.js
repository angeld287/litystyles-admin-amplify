import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem, utilEditItem
} from '../../utils/Items/Utils'
import { getList, createUpdateItem } from "../../services/AppSync";
import { listTypes } from "../../graphql/customQueries";
import { createType, updateType } from '../../graphql/customMutations'
import moment from "moment";

export const TypesContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    itemsLoading: false,
    addItem: () => { },
    editItem: () => { },
    updateDeleteItem: () => { },
    itemsCount: 0,
    getItemsNextToken: () => { },
    nextToken: null,
});

const TypesProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [nextToken, setNextToken] = useState(null);
    const [itemsLoading, setItemsLoading] = useState(false);

    const addItem = async item => {
        let object = {};
        try {
            const input = { name: item.name, code: '' };

            object = await createUpdateItem('createType', createType, input);

        } catch (e) {
            console.log("Error al crear una Tipo: ", e)
            object = false
        }

        if (object !== false) {
            setItems(utilAddItem(items, object))
        }

        return object
    };

    const editItem = async item => {
        let object;

        try {
            const input = { id: item.id, name: item.name, code: '' };

            object = await createUpdateItem('updateType', updateType, input);

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

            object = await createUpdateItem('updateType', updateType, input);
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
                result = await getList('listTypes', listTypes, { filter: { deleted: { ne: true } } });
                _items = result.items;
                while (_items.length < 10 && result.nextToken !== null) {
                    result = await getList('listTypes', listTypes, { filter: { deleted: { ne: true } }, nextToken: result.nextToken });
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
                result = await getList('listTypes', listTypes, { filter: { deleted: { ne: true } }, nextToken: nextToken });
                setItems([...items, ...result.items.filter(_ => items.find(x => x.id === _.id) === undefined)])
                setNextToken(result.nextToken);
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <TypesContext.Provider
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
                nextToken,
            }}
        >
            {children}
        </TypesContext.Provider>
    );
};

TypesProvider.propTypes = {
    children: PropTypes.any
}

export default TypesProvider;