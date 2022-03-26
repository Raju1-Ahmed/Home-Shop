import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faDeleteLeft, faRemove, faRemoveFormat,faRandom} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './quantity.css'

const Quantity = ({addCart, RemoveItem}) => {
const {name, img,} = addCart;

    return (
        <div className='quantity-Container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <button onClick={git}>
            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Quantity;