import React from 'react'
import CardsList from '../../Components/cardList';
import { PAGE_OPTIONS } from '../../context/communContex/commun.data';

const Home = () => {
    return (
        <div>
            <CardsList items={PAGE_OPTIONS} />
        </div>
    );
}

export default Home;