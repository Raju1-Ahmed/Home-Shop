import React from 'react';
import './Product.css'

const Product = ({product, handleToCart}) => {
    const {name, img,} = product;
    // console.log(product);
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2 className='product-name'>Product Name: {name}</h2>
            <button onClick={()=>handleToCart(product)} className='btn-card'><p className='btm-text'>Purches</p></button>
        </div>
    );
};

export default Product;