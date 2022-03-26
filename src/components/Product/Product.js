import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = ({product, handleToCart}) => {
    const {name, img,} = product;
    // console.log(product);
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2 className='product-name'>Product Name: {name}</h2>
            <button onClick={()=>handleToCart(product)} className='btn-card'>
                <p className='btm-text'> Purches </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;