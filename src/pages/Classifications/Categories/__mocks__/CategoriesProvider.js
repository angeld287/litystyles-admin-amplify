import { CategoriesContext } from "../../../../providers";
import { useState } from 'react';

const categoryList = [
    {
        id: "1",
        name: "Herramientas de Barbero",
        subcategories: {
            items: [
                {
                    name: "Navajas",
                    code: "01",
                    deleted: false,
                    categoryName: "Herramientas de Barbero",
                    id: '1',
                },
                {
                    name: "Tijeras",
                    code: "02",
                    deleted: false,
                    categoryName: "Herramientas de Barbero",
                    id: '2',
                },
            ],
            nextToken: null
        },
        typeName: "Product",
        code: "01",
        deleted: false,
        deletedAt: '2/30/22',
        createdAt: '2/30/22',
        owner: 'aa'
    },
    {
        id: "2",
        name: "Servicios para la Cara",
        subcategories: {
            items: [
                {
                    name: "Navajas",
                    code: "03",
                    deleted: false,
                    categoryName: "Servicios para la Cara",
                    id: '1',
                },
                {
                    name: "Tijeras",
                    code: "04",
                    deleted: false,
                    categoryName: "Servicios para la Cara",
                    id: '2',
                },
            ],
            nextToken: null
        },
        typeName: "Service",
        code: "02",
        deleted: false,
        deletedAt: '2/30/22',
        createdAt: '2/30/22',
        owner: 'aa'
    }
];

const MockCategoriesProvider = ({ children }) => {
    const [items, setItems] = useState(categoryList);

    const addItem = jest.fn(item => {
        const _i = items;
        _i.push({
            id: "3",
            name: item.name,
            typeName: item.typeName,
            code: item.code,
            deleted: false,
            deletedAt: '2/30/22',
            createdAt: '2/30/22',
            owner: 'aa'
        })

        setItems(_i);

        return true;
    })


    return (<CategoriesContext.Provider value={{ items, addItem }}>
        {children}
    </CategoriesContext.Provider>);
}

export default MockCategoriesProvider;