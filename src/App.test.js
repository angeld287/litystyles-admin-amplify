import { render, screen, fireEvent, prettyDOM, waitFor, waitForElementToBeRemoved } from './utils/test-utils';
import { act } from 'react-dom/test-utils';
import Products from './pages/Business/Products';
import { ProductContext, CategoriesContext } from "../src/providers";
import { ConsoleLogger } from '@aws-amplify/core';
import { useState } from 'react';
let container;
let file;



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

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

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



test('Add Product to the List', async () => {

  const { rerender, getAllByClass, getByType, getByClass } = render(
    <MockProductProvider>
      <CategoriesContext.Provider value={{ items: categoryList }}>
        <Products />
      </CategoriesContext.Provider>
    </MockProductProvider>
  )

  //verficar que en la lista exista un unico item
  let tableRows = getAllByClass(/ant-table-row/i);

  //hacer clic en el boton agregar producto
  const addBtn = screen.getByText(/Agregar Producto/i);
  fireEvent.click(addBtn);

  //completar el campo nombre
  const name = screen.getByPlaceholderText(/Nombre/i);

  fireEvent.change(name, {
    target: { value: "Toalla" }
  });
  expect(name.value).toBe('Toalla');

  //completar el campo costo
  const cost = screen.getByPlaceholderText(/Costo/i);
  fireEvent.change(cost, {
    target: { value: '100' }
  });
  expect(cost.value).toBe('100');

  //completar el campo formato de envace
  const packagingformat = screen.getByPlaceholderText(/Formato de Envace/i);
  fireEvent.change(packagingformat, {
    target: { value: 'N/a' }
  });
  expect(packagingformat.value).toBe('N/a');


  //buscar los Ant Selects
  let antSelects = getAllByClass(/ant-select-selection-search-input/i);

  //completar el campo categoria
  const category = antSelects[0];
  // Abrir el dropdown de categoria
  await waitFor(() => {
    fireEvent.mouseDown(category);
  });

  //Seleccionar la opcion "Herramientas de Barbero"
  fireEvent.click(screen.getByText('Herramientas de Barbero'));
  // Cerrar dropdown
  fireEvent.click(getByClass(/ant-modal-title/i));

  //completar el campo imagen
  let image = getByType(/file/i);
  expect(image.files.length).toBe(0);

  //agregar la imagen
  await waitFor(() => {
    fireEvent.change(image, {
      target: { files: [file] },
    })
  });

  image = getByType(/file/i);
  //expect(image.files.length).toBe(1);


  //hacer clic en el boton Guardar
  const saveBtn = screen.getByText(/Guardar/i);
  fireEvent.click(saveBtn);

  await waitFor(() => {
    //expect(screen.getByText("Guardar")).toBeInTheDocument();
    //expect(screen.getByText("Campo Obligatorio")).toBeInTheDocument();

    const okBtns = getAllByClass(/swal2-confirm/i);
    fireEvent.click(okBtns[0])
  });

  rerender(
    <MockProductProvider>
      <Products />
    </MockProductProvider>
  );

  //verficar que la lista tenga dos items
  let tableRowsAfterInsert = getAllByClass(/ant-table-row/i)
  expect(tableRowsAfterInsert.length).toBeGreaterThan(tableRows.length);

});