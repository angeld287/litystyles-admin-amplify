import React from 'react'
import CardsList from '../../components/cardList/cards.list';

const homeOptions = [
    {
        id: 1,
        title: "Negocio",
        link: ""
    },
    {
        id: 2,
        title: "Clasificaciones",
        link: ""
    },
    {
        id: 3,
        title: "Gestion de Clientes",
        link: ""
    }
];

const Home = () => {
    return (
        <div>
            <CardsList items={homeOptions} />
        </div>
    );
}

export default Home;