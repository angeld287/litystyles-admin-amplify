import { createContext } from "react";

import {
    getItems,
    utilAddItem, utilRemoveItem
} from './products.utils'

const ProductContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    items: [],
    addItem: () => { },
    removeItem: () => { },
    itemsCount: 0,
});

const ProductProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    const addItem = item => setItems(utilAddItem(cartItems, item));
    const removeItem = item => setItems(utilRemoveItem(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setItemsCount(getItems(items));
    }, [items]);

    return (
        <ProductContext.Provider
            value={{
                hidden,
                toggleHidden,
                items,
                addItem,
                removeItem,
                removeItem,
                itemsCount
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;