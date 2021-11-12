export const utilAddItem = (items, itemToAdd) => {
    const existingItem = items.find(
        _item => _item.id === itemToAdd.id
    );

    if (existingItem) {
        return items.map(_item =>
            _item.id === itemToAdd.id
                ? { ..._item, quantity: _item.quantity + 1 }
                : _item
        );
    }

    return [...items, { ...itemToAdd, quantity: 1 }];
};

export const utilRemoveItem = (items, itemToRemove) => {
    const existingItem = items.find(
        _item => _item.id === itemToRemove.id
    );

    if (existingItem.quantity === 1) {
        return items.filter(_item => _item.id !== itemToRemove.id);
    }

    return items.map(_item =>
        _item.id === itemToRemove.id
            ? { ..._item, quantity: _item.quantity - 1 }
            : _item
    );
};

export const filterItem = (items, item) =>
    items.filter(_item => _item.id !== item.id);

export const getItems = items =>
    items.reduce(
        (accumalatedQuantity, items) => accumalatedQuantity + items.quantity,
        0
    );