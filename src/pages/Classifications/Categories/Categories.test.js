import { render, screen, fireEvent, prettyDOM, waitFor } from '../../../utils/test-utils';
import Categories from './index';
import MockCategoriesProvider from './__mocks__/CategoriesProvider.js';
import MockTypesProvider from '../Types/__mocks__/TypesProvider.js';
let component;

beforeEach(() => {
    component = render(
        <MockCategoriesProvider>
            <MockTypesProvider>
                <Categories />
            </MockTypesProvider>
        </MockCategoriesProvider>
    )
});

test('Verify correct renderization of Categories Component', () => {
    const { asFragment } = render(<Categories />);
    expect(asFragment()).toMatchSnapshot();
})

test('Add Category without Name', async () => {
    const { getAllByClass } = component;

    //clic "Agregar Categoria" button
    fireEvent.click(screen.getByText(/Agregar Categoria/i));

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Nombre")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Category without Codigo', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Categoria" button
    fireEvent.click(screen.getByText(/Agregar Categoria/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Codigo")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Category without Type', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Categoria" button
    fireEvent.click(screen.getByText(/Agregar Categoria/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");
    writeInInputFoundByPlaceHolder(/Codigo/i, "100");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Tipo")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Category to the List', async () => {

    const { rerender, getAllByClass, writeInInputFoundByPlaceHolder, SelectItemInModalFoundByTestId } = component;

    //Get the number of existing items in the table
    let tableRows = getAllByClass(/ant-table-row/i);

    //clic "Agregar Categoria" button
    fireEvent.click(screen.getByText(/Agregar Categoria/i));

    //Complete the field "Nombre"
    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");

    //Complete the field "Codigo"
    writeInInputFoundByPlaceHolder(/Codigo/i, "100");

    //select the category
    await waitFor(() => {
        SelectItemInModalFoundByTestId("tipo", "Servicio");
    });

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {

        expect(getAllByClass(/swal2-success-ring/)[0]).toBeInTheDocument();
        expect(screen.getByText(/El proceso ha finalizado correctamente/)).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

    //rerender the componet to reflect the new item added to the table
    rerender(
        <MockCategoriesProvider>
            <Categories />
        </MockCategoriesProvider>
    );

    //Verify that the item has been created and inserted in the table
    expect(getAllByClass(/ant-table-row/i).length).toBeGreaterThan(tableRows.length);

});