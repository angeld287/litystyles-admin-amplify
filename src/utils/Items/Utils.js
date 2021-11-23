export const utilAddItem = (items, itemToAdd) => {
    const existingItem = items.find(
        _item => _item.id === itemToAdd.id
    );

    if (existingItem) {
        return items.map(_item =>
            _item.id === itemToAdd.id
                ? _item
                : _item
        );
    }

    return [...items, itemToAdd];
};

export const utilRemoveItem = (items, itemToRemove) => {
    const existingItem = items.find(
        _item => _item.id === itemToRemove.id
    );

    if (existingItem === 1) {
        return items.filter(_item => _item.id !== itemToRemove.id);
    }
};

export const filterItem = (items, item) =>
    items.filter(_item => _item.id !== item.id);

export const getItems = items => {
    //console.log(items);
    items.reduce((accumalatedQuantity, items) => accumalatedQuantity + items.quantity, 0)
    return 10
};

export const setModuleStates = (stateFields, itemFields) => {
    const itemsf = Object.keys(itemFields);
    stateFields.forEach(state => {
        state[Object.keys(state)[1]](itemFields[itemsf.find(_ => _ === Object.keys(state)[0].toLowerCase())])
    });
}