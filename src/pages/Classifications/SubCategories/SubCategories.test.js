import { render, screen, fireEvent, prettyDOM, waitFor } from '../../../utils/test-utils';
import SubCategories from './index';
import MockSubCategoriesProvider from './__mocks__/SubCategoriesProvider.js';
import MockCategoriesProvider from '../Categories/__mocks__/CategoriesProvider.js';
let component;

beforeEach(() => {
    component = render(
        <MockSubCategoriesProvider>
            <MockCategoriesProvider>
                <SubCategories />
            </MockCategoriesProvider>
        </MockSubCategoriesProvider>
    )
});

test('Verify correct renderization of SubCategories Component', () => {
    const { asFragment } = render(<SubCategories />);
    expect(asFragment()).toMatchSnapshot();
})

test('Add SubCategory without Name', async () => {
    const { getAllByClass } = component;

    //clic "Agregar SubCategoria" button
    fireEvent.click(screen.getByText(/Agregar SubCategoria/i));

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Nombre")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add SubCategory without Codigo', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar SubCategoria" button
    fireEvent.click(screen.getByText(/Agregar SubCategoria/i));

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

test('Add SubCategory without Category', async () => {
    const { getAllByClass, writeInInputFoundByPlaceHolder } = component;

    //clic "Agregar SubCategoria" button
    fireEvent.click(screen.getByText(/Agregar SubCategoria/i));

    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");
    writeInInputFoundByPlaceHolder(/Codigo/i, "100");

    //clic "Guardar" button
    fireEvent.click(screen.getByText(/Guardar/i));

    await waitFor(() => {
        //verify if validation message is shown
        expect(screen.getByText("Favor completar el campo Categoria")).toBeInTheDocument();

        //clic to ok button
        fireEvent.click(getAllByClass(/swal2-confirm/i)[0])
    });

})

test('Add SubCategory to the List', async () => {

    const { rerender, getAllByClass, writeInInputFoundByPlaceHolder, SelectItemInModalFoundByTestId } = component;

    //Get the number of existing items in the table
    let tableRows = getAllByClass(/ant-table-row/i);

    //clic "Agregar SubCategoria" button
    fireEvent.click(screen.getByText(/Agregar SubCategoria/i));

    //Complete the field "Nombre"
    writeInInputFoundByPlaceHolder(/Nombre/i, "Corte de Pelo");

    //Complete the field "Codigo"
    writeInInputFoundByPlaceHolder(/Codigo/i, "100");

    //select the category
    await waitFor(() => {
        SelectItemInModalFoundByTestId("categoria", "Servicios para la Cara");
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
        <MockSubCategoriesProvider>
            <SubCategories />
        </MockSubCategoriesProvider>
    );

    //Verify that the item has been created and inserted in the table
    expect(getAllByClass(/ant-table-row/i).length).toBeGreaterThan(tableRows.length);

});