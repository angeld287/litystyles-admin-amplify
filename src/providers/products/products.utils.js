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

export const getItems = items =>
    items.reduce(
        (accumalatedQuantity, items) => accumalatedQuantity + items.quantity,
        0
    );