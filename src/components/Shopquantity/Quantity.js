import React from 'react';
import './quantity.css'

const Quantity = ({addCart}) => {
const {name, img} = addCart;
    return (
        <div className='quantity-Container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <button>icon</button>
        </div>
    );
};

export default Quantity;