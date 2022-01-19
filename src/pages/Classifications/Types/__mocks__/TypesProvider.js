import { TypesContext } from "../../../../providers";
import { useState } from 'react';

const TypesList = [{
    id: '34',
    name: 'Servicio',
    code: 23,
    deleted: false,
    deletedAt: '2/30/22',
    createdAt: '2/30/22',
    owner: 'tt'
}
];

const MockTypesProvider = ({ children }) => {
    const [items, setItems] = useState(TypesList);

    const addItem = jest.fn(item => {
        const _i = items;
        _i.push({
            id: '35',
            name: item.name,
            code: item.code,
            deleted: false,
            deletedAt: '2/30/22',
            createdAt: '2/30/22',
            owner: 'tt'
        })
        setItems(_i);
        return true;
    })

    return (<TypesContext.Provider value={{ items, addItem }}>
        {children}
    </TypesContext.Provider>);
}

export default MockTypesProvider;