import { SubCategoriesContext } from "../../../../providers";
import { useState } from 'react';

const SubCategoryList = [{
    id: 1,
    name: 'Tijeras',
    code: 434,
    categoryName: 'Herramientas de Barbero',
    deleted: false,
    deletedAt: '2/30/22',
    createdAt: '2/30/22',
    owner: 'aa'
}
];

const MockSubCategoriesProvider = ({ children }) => {
    const [items, setItems] = useState(SubCategoryList);

    const addItem = jest.fn(item => {
        const _i = items;
        _i.push({
            id: 2,
            name: item.name,
            code: item.code,
            categoryName: 'Herramientas de Barbero',
            deleted: false,
            deletedAt: '2/30/22',
            createdAt: '2/30/22',
            owner: 'aa'
        })
        setItems(_i);

        return true;
    })

    return (<SubCategoriesContext.Provider value={{ items, addItem }}>
        {children}
    </SubCategoriesContext.Provider>);
}

export default MockSubCategoriesProvider;