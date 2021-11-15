import React from 'react'
import CardsList from '../../components/CardList';
import { PAGE_OPTIONS } from '../../context/communContex/commun.data';

const Home = () => {
    return (
        <div>
            <CardsList items={PAGE_OPTIONS} />
        </div>
    );
}

export default Home;