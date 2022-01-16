import { screen, fireEvent, prettyDOM, waitFor } from '@testing-library/react';

const writeInInputFoundByPlaceHolder = (body, placeHolder, text) => {

    const input = screen.getByPlaceholderText(placeHolder);
    fireEvent.change(input, {
        target: { value: text }
    });
    expect(input.value).toBe(text);
}

const SelectItemInModalFoundByTestId = async (body, dataTestId, option) => {

    // find select by data test id
    let select = screen.getByTestId(dataTestId).querySelector('[class=ant-select-selection-search-input]');

    // Dropdown the select
    await waitFor(() => {
        fireEvent.mouseDown(select);
    });

    // Select the option
    fireEvent.click(screen.getByText(option));

    // Close the select
    fireEvent.click(body);
}

const insertFileInInputFileFoundByTestId = async (body, dataTestId, file) => {
    //Get the input file by test id
    let _file = screen.getByTestId(dataTestId);

    //verify if the input file is empty
    expect(_file.files.length).toBe(0);

    //add file to the input file
    await waitFor(() => {
        fireEvent.change(_file, {
            target: { files: [file] },
        })
    });

    //verify if the input file has the new file
    _file = screen.getByTestId(dataTestId);
    expect(_file.files.length).toBe(1);
}

export {
    writeInInputFoundByPlaceHolder,
    SelectItemInModalFoundByTestId,
    insertFileInInputFileFoundByTestId
}