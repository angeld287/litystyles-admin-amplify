import React from 'react';
import './cards.list.css';
import PropTypes from 'prop-types';

const CardsList = ({ items }) => {
    return (
        <div className="card-container">
            {
                items.map(_ => {
                    return <div className="card" key={_.id}>
                        <header className="card-header header-img">
                            <p className="header-title">$224,900</p>
                        </header>
                        <div className="card-body">3 Rooms, 2 Baths - House for sale</div>
                        <div className="card-footer">
                            <button className="btn">Buy</button>
                            <button className="btn">More info</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

CardsList.propTypes = {
    items: PropTypes.array
}

export default CardsList;