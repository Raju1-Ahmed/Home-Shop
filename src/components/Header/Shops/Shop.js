import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
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
                <h2>Choice Product:</h2>
                {
                    addCarts.map((addCart) => 
                    )
                }


            </div>
        </div>
    );
};

export default Shop;