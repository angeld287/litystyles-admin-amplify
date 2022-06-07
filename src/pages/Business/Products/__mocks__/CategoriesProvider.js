import { CategoriesContext } from "../../../../providers";

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
    }
];

const MockCategoriesProvider = ({ children }) => {

    return (<CategoriesContext.Provider value={{ items: categoryList }}>
        {children}
    </CategoriesContext.Provider>);
}

export default MockCategoriesProvider;