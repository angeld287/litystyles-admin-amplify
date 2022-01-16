import { ProductContext } from "../../../../providers";
import { useState } from 'react';

const producList = [{
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

const MockProductProvider = ({ children }) => {
    const [items, setItems] = useState(producList);

    const addItem = jest.fn(product => {
        const _i = items;
        _i.push({
            cost: product.cost,
            categoryId: 2,
            subCategoryId: 2,
            name: product.name,
            image: product.image,
            deleted: false,
            id: 3,
            packagingformat: product.packagingformat,
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

    return (<ProductContext.Provider value={{ items, addItem }}>
        {children}
    </ProductContext.Provider>);
}

export default MockProductProvider;