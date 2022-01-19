import { render, screen, fireEvent, prettyDOM, waitFor } from '../../../utils/test-utils';
import Services from './index';
import MockServiceProvider from './__mocks__/ServiceProvider.js';
import MockCategoriesProvider from '../../Classifications/Categories/__mocks__/CategoriesProvider.js';
let component;

beforeEach(() => {
    component = render(
        <MockServiceProvider>
            <MockCategoriesProvider>
                <Services />
            </MockCategoriesProvider>
        </MockServiceProvider>
    )
});

test('Verify correct renderization of Services Component', () => {
    const { asFragment } = render(<Services />);
    expect(asFragment()).toMatchSnapshot();
})

test('Add Service without Name', async () => {
    const { getAllByClass } = component;

    //clic "Agregar Servicio" button
    fireEvent.click(screen.getByText(/Agregar Servicio/i));

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Nombre")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Service without Cost', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Servicio" button
    fireEvent.click(screen.getByText(/Agregar Servicio/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Costo")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add Service without Category', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar Servicio" button
    fireEvent.click(screen.getByText(/Agregar Servicio/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");
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

test('Add Service to the List', async () => {

    const { rerender, getAllByClass, writeInInputFoundByPlaceHolder, SelectItemInModalFoundByTestId, insertFileInInputFileFoundByTestId } = component;

    //Get the number of existing items in the table
    let tableRows = getAllByClass(/ant-table-row/i);

    //clic "Agregar Servicio" button
    fireEvent.click(screen.getByText(/Agregar Servicio/i));

    //Complete the field "Nombre"
    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");

    //Complete the field "Costo"
    writeInInputFoundByPlaceHolder(/Costo/i, "100");

    //select the category
    await waitFor(() => {
        SelectItemInModalFoundByTestId("categoria", "Servicios para la Cara");
    });

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

    //rerender the componet to reflect the new item added to the table
    rerender(
        <MockServiceProvider>
            <Services />
        </MockServiceProvider>
    );

    //Verify that the item has been created and inserted in the table
    expect(getAllByClass(/ant-table-row/i).length).toBeGreaterThan(tableRows.length);

});