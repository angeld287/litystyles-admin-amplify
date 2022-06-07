import { render, screen, fireEvent, prettyDOM, waitFor } from '../../../utils/test-utils';
import Products from './index';
import MockProductProvider from './__mocks__/ProductProvider.js';
import MockCategoriesProvider from '../../Classifications/Categories/__mocks__/CategoriesProvider.js';
let file;
let component;

beforeEach(() => {
    //before each tests initialize the image file and render the product component
    file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    component = render(
        <MockProductProvider>
            <MockCategoriesProvider>
                <Products />
            </MockCategoriesProvider>
        </MockProductProvider>
    )
});

test('Verify correct renderization of Product Component', () => {
    const { asFragment } = render(<Products />);
    expect(asFragment()).toMatchSnapshot();
})

test('Add product without Name', async () => {
    const { getAllByClass } = component;

    //clic "Agregar Producto" button
    fireEvent.click(screen.getByText(/Agregar Producto/i));

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Nombre")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add product without Cost', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Producto" button
    fireEvent.click(screen.getByText(/Agregar Producto/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Toalla");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Costo")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add product without Category', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Producto" button
    fireEvent.click(screen.getByText(/Agregar Producto/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Toalla");
    writeInInputFoundByPlaceHolder(/Costo/i, "100");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Categoria")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add product without Image', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder, SelectItemInModalFoundByTestId } = component;

    //clic "Agregar Producto" button
    fireEvent.click(screen.getByText(/Agregar Producto/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Toalla");
    writeInInputFoundByPlaceHolder(/Costo/i, "100");

    //select the category
    await waitFor(() => {
        SelectItemInModalFoundByTestId("categoria", "Herramientas de Barbero");
    });

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Imagen")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add product without "formato de envace"', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder, SelectItemInModalFoundByTestId, insertFileInInputFileFoundByTestId } = component;

    //clic "Agregar Producto" button
    fireEvent.click(screen.getByText(/Agregar Producto/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Toalla");
    writeInInputFoundByPlaceHolder(/Costo/i, "100");

    //select the category
    await waitFor(() => {
        SelectItemInModalFoundByTestId("categoria", "Herramientas de Barbero");
    });

    //insert image to input file
    await waitFor(() => {
        insertFileInInputFileFoundByTestId("imagen", file);
    });

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Formato de Envace")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Product to the List', async () => {

    const { rerender, getAllByClass, writeInInputFoundByPlaceHolder, SelectItemInModalFoundByTestId, insertFileInInputFileFoundByTestId } = component;

    //Get the number of existing items in the table
    let tableRows = getAllByClass(/ant-table-row/i);

    //clic "Agregar Producto" button
    fireEvent.click(screen.getByText(/Agregar Producto/i));

    //Complete the field "Nombre"
    writeInInputFoundByPlaceHolder(/Nombre/i, "Toalla");

    //Complete the field "Costo"
    writeInInputFoundByPlaceHolder(/Costo/i, "100");

    //Complete the field "Formato de Envace"
    writeInInputFoundByPlaceHolder(/Formato de Envace/i, "N/a");

    //select the category
    await waitFor(() => {
        SelectItemInModalFoundByTestId("categoria", "Herramientas de Barbero");
    });

    //insert image to input file
    await waitFor(() => {
        insertFileInInputFileFoundByTestId("imagen", file);
    });

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

    //rerender the componet to reflect the new item added to the table
    rerender(
        <MockProductProvider>
            <Products />
        </MockProductProvider>
    );

    //Verify that the item has been created and inserted in the table
    expect(getAllByClass(/ant-table-row/i).length).toBeGreaterThan(tableRows.length);

});