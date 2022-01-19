import { render, screen, fireEvent, prettyDOM, waitFor } from '../../../utils/test-utils';
import Types from './index';
import MockTypesProvider from './__mocks__/TypesProvider.js';
import MockCategoriesProvider from '../Categories/__mocks__/CategoriesProvider.js';

let component;

beforeEach(() => {
    component = render(
        <MockTypesProvider>
            <MockCategoriesProvider>
                <Types />
            </MockCategoriesProvider>
        </MockTypesProvider>
    )
});

test('Verify correct renderization of Types Component', () => {
    const { asFragment } = render(<Types />);
    expect(asFragment()).toMatchSnapshot();
})

test('Add Types without Name', async () => {
    const { getAllByClass } = component;

    //clic "Agregar Tipo" button
    fireEvent.click(screen.getByText(/Agregar Tipo/i));

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Nombre")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Types without Codigo', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Tipo" button
    fireEvent.click(screen.getByText(/Agregar Tipo/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Tipo Prueba");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Codigo")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Types to the List', async () => {

    const { rerender, getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //Get the number of existing items in the table
    let tableRows = getAllByClass(/ant-table-row/i);

    //clic "Agregar Tipo" button
    fireEvent.click(screen.getByText(/Agregar Tipo/i));

    //Complete the field "Nombre"
    writeInInputFoundByPlaceHolder(/Nombre/i, "Tipo Prueba");

    //Complete the field "Codigo"
    writeInInputFoundByPlaceHolder(/Codigo/i, "100");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {

        expect(getAllByClass(/swal2-success-ring/)[0]).toBeInTheDocument();
        expect(screen.getByText(/El proceso ha finalizado correctamente/)).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

    //rerender the componet to reflect the new item added to the table
    rerender(<MockTypesProvider><Types /></MockTypesProvider>);


    //Verify that the item has been created and inserted in the table
    expect(getAllByClass(/ant-table-row/i).length).toBeGreaterThan(tableRows.length);

});