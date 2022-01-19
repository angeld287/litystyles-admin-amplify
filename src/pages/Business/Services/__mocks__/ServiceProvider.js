import { ServiceContext } from "../../../../providers";
import { useState } from 'react';

const serviceList = [{
    cost: 20,
    categoryId: 2,
    subCategoryId: 2,
    name: 'test',
    image: null,
    deleted: false,
    id: 1,
    packagingformat: 'n/a',
    createdAt: '2/30/22',
    category: {
        items: {
            id: 1,
            category: {
                id: 2,
                name: "catt"
            }
        }
    },
    subcategory: {
        items: {
            id: 3,
            subcategory: {
                id: 4,
                name: "subtest"
            }
        }
    }
}
];

const MockServiceProvider = ({ children }) => {
    const [items, setItems] = useState(serviceList);

    const addItem = jest.fn(item => {
        const _i = items;
        _i.push({
            cost: item.cost,
            categoryId: 2,
            subCategoryId: 2,
            name: item.name,
            image: item.image,
            deleted: false,
            id: 3,
            packagingformat: item.packagingformat,
            createdAt: '2/30/22',
            category: {
                items: {
                    id: 1,
                    category: {
                        id: 2,
                        name: "catt"
                    }
                }
            },
            subcategory: {
                items: {
                    id: 3,
                    subcategory: {
                        id: 4,
                        name: "subtest"
                    }
                }
            }
        })
        setItems(_i);

        return true;
    })

    return (<ServiceContext.Provider value={{ items, addItem }}>
        {children}
    </ServiceContext.Provider>);
}

export default MockServiceProvider;