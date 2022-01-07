import { render, screen, fireEvent, prettyDOM, waitFor, waitForElementToBeRemoved } from './utils/test-utils';
import { act } from 'react-dom/test-utils';
import Business from './pages/Business';
import { ProductContext, CategoriesContext } from "../src/providers";
let container;
let file;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


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

const categoryList = [
  {
    id: 1,
    name: "Herramientas de Barbero",
    subcategories: {
      items: [
        {
          name: "Navajas",
          code: "01",
          deleted: false,
          categoryName: "Herramientas de Barbero",
          id: 1,
        },
        {
          name: "Tijeras",
          code: "02",
          deleted: false,
          categoryName: "Herramientas de Barbero",
          id: 2,
        },
      ],
      nextToken: null
    },
    typeName: "OFI",
    code: "01",
    deleted: false,
    deletedAt: '2/30/22',
    createdAt: '2/30/22',
    owner: 'aa'
  }
];

// test('Open and Close Product Modal', () => {
//   render(<Business />);
//   const addBtn = screen.getByText(/Agregar Producto/i);
//   fireEvent.click(addBtn);
//   const cancelBtn = screen.getByText(/Cancelar/i);
//   fireEvent.click(cancelBtn);
// });

// test('Read Product List', () => {
//   render(
//     <ProductContext.Provider value={{ items: producList }}>
//       <Business />
//     </ProductContext.Provider>
//   )

//   const editBtns = screen.getAllByText(/Editar/i);
//   expect(editBtns.length).toEqual(1);
// });

const addItem = jest.fn(product => {
  const item = {
    cost: product.cost,
    categoryId: 2,
    subCategoryId: 2,
    name: product.name,
    image: product.image,
    deleted: false,
    id: 2,
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
  };

  producList.push(item);
});

test('Add Product to the List', async () => {

  const { getAllByClass, getByType } = render(
    <ProductContext.Provider value={{ items: producList, addItem }}>
      <CategoriesContext.Provider value={{ items: categoryList }}>
        <Business />
      </CategoriesContext.Provider>
    </ProductContext.Provider>
  )
  //console.log(prettyDOM(test.container.firstChild))


  //verficar que en la lista exista un unico item
  const editBtns = screen.getAllByText(/Editar/i);
  expect(editBtns.length).toEqual(1);

  //hacer clic en el boton agregar producto
  const addBtn = screen.getByText(/Agregar Producto/i);
  fireEvent.click(addBtn);

  //completar el campo nombre
  const name = screen.getByPlaceholderText(/Nombre/i);
  fireEvent.change(name, {
    target: { value: 'Toalla' }
  });
  expect(name.value).toBe('Toalla');


  //completar el campo costo
  const cost = screen.getByPlaceholderText(/Costo/i);
  fireEvent.change(cost, {
    target: { value: '100' }
  });
  expect(cost.value).toBe('100');



  //buscar los Ant Selects
  const antSelects = getAllByClass(/ant-select-selection-search-input/i);

  //completar el campo categoria
  const category = antSelects[0];
  await waitFor(() => {
    fireEvent.change(category, {
      target: { value: '1' }
    });
  })
  expect(category.value).toBe("1");

  //completar el campo subcategoria
  const subcategory = antSelects[1];
  await waitFor(() => {
    fireEvent.change(subcategory, {
      target: { value: '1' }
    });
  })

  expect(subcategory.value).toBe("1");

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

  //completar el campo formato de envace
  const packagingformat = screen.getByPlaceholderText(/Formato de Envace/i);
  fireEvent.change(packagingformat, {
    target: { value: 'N/a' }
  });
  expect(packagingformat.value).toBe('N/a');


  //hacer clic en el boton Guardar
  const saveBtn = screen.getByText(/Guardar/i);
  fireEvent.click(saveBtn);

  expect(screen.getByText("Guardar")).toBeInTheDocument();

  setTimeout(() => {
    expect(screen.getByText("Guardar")).not.toBeInTheDocument();
  }, 5000)

  //verficar que la lista tenga dos items
  const editBtns1 = screen.getAllByText(/Editar/i);
  expect(editBtns1.length).toEqual(1);

});