import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Quantity from '../../Shopquantity/Quantity';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [addCarts, setaddCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
    const handleToCart=(product)=>{
        console.log('check',product);
        const newCart = [...addCarts, product];
        setaddCart(newCart)
    }
    return (
        <div className='shop-Container'>
            <div className='product-Container'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleToCart={handleToCart}

                />)
            }
            </div>
            <div className="Card-Container">
                <h2>Choice</h2>
                {
                    addCarts.map((addCart) => <Quantity 
                    key={addCart.id}
                    addCart={addCart}
                    />)
                }
                <button className='random'>Rendomly show</button>
                <button className='random'>remove</button>

            </div>
        </div>
    );
};

export default Shop;