import React from 'react'
import CardsList from '../../components/cardList/cards.list';
import { PAGE_OPTIONS } from '../../context/communContex/commun.data';
//import { ProductContext } from '../../providers/products/products.provider';



const Home = () => {
    //const { items, addItem } = useContext(ProductContext);
    //addItem({ id: 1, name: 'shampoo' })

    //console.log(items)
    return (
        <div>
            <CardsList items={PAGE_OPTIONS} />
        </div>
    );
}

export default Home;