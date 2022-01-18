import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {
    getItems,
    utilAddItem, utilRemoveItem, utilEditItem
} from '../../utils/Items/Utils'
import { getList, createUpdateItem } from "../../services/AppSync";
import { listServices } from "../../graphql/customQueries";
import { createService, createServiceCategory, createServiceSubCategory, updateService, updateServiceCategory, updateServiceSubCategory } from '../../graphql/customMutations'
import moment from "moment";

export const ServiceContext = createContext({
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

const ServiceProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [nextToken, setNextToken] = useState(null);
    const [itemsLoading, setItemsLoading] = useState(false);

    const addItem = async item => {
        let object = {};
        try {
            const input = { name: item.name, cost: item.cost, categoryId: item.category, subCategoryId: item.subcategory };

            object = await createUpdateItem('createService', createService, input);

            if (object !== false) {
                const category = await createUpdateItem('createServiceCategory', createServiceCategory, { serviceCategoryServiceId: object.id, serviceCategoryCategoryId: item.category });
                object.category.items.push(category)

                if (item.subcategory !== undefined && item.subcategory !== '' && item.subcategory !== null) {
                    const subcategory = await createUpdateItem('createServiceSubCategory', createServiceSubCategory, { serviceSubCategoryServiceId: object.id, serviceSubCategorySubcategoryId: item.subcategory });
                    object.subcategory.items.push(subcategory)
                }
            }
        } catch (e) {
            console.log("Error al crear un Servicio: ", e)
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
            const input = { id: item.id, name: item.name, cost: item.cost, categoryId: item.category, subCategoryId: item.subcategory };
            bedit = items.find(_ => _.id === input.id);

            object = await createUpdateItem('updateService', updateService, input);
            if (object !== false) {

                if (typeof item.category === "string" && bedit.category.items[0].category.id !== item.category) {
                    category = await createUpdateItem('updateServiceCategory', updateServiceCategory, { id: object.category.items[0].id, serviceCategoryCategoryId: item.category });
                    if (category !== false) {
                        object.category.items.splice(0, 1);
                        object.category.items.push(category);
                    }
                }

                if (category !== false) {
                    if (bedit.subcategory.items.length === 0) {
                        if (typeof item.subcategory === "string") {
                            subcategory = await createUpdateItem('createServiceSubCategory', createServiceSubCategory, { serviceSubCategoryServiceId: object.id, serviceSubCategorySubcategoryId: item.subcategory });
                        }
                    } else if (typeof item.subcategory === "string" && bedit.subcategory.items[0].subcategory.id !== item.subcategory) {
                        subcategory = await createUpdateItem('updateServiceSubCategory', updateServiceSubCategory, { id: object.subcategory.items[0].id, serviceSubCategorySubcategoryId: item.subcategory });
                        if (subcategory !== false) {
                            object.subcategory.items.splice(0, 1);
                            object.subcategory.items.push(subcategory);
                        }
                    }
                }
            }

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

            object = await createUpdateItem('updateService', updateService, input);
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
                result = await getList('listServices', listServices, { filter: { deleted: { ne: true } } });
                _items = result.items;
                while (_items.length < 10 && result.nextToken !== null) {
                    result = await getList('listServices', listServices, { filter: { deleted: { ne: true } }, nextToken: result.nextToken });
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
                result = await getList('listServices', listServices, { filter: { deleted: { ne: true } }, nextToken: nextToken });
                setItems([...items, ...result.items.filter(_ => items.find(x => x.id === _.id) === undefined)])
                setNextToken(result.nextToken);
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <ServiceContext.Provider
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
                nextToken
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
};

ServiceProvider.propTypes = {
    children: PropTypes.any
}

export default ServiceProvider;