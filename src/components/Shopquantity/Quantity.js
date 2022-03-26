import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faDeleteLeft, faRemove, faRemoveFormat,faRandom} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './quantity.css'

const Quantity = ({addCart}) => {
const {name, img} = addCart;
    return (
        <div className='quantity-Container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <button>
            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Quantity;