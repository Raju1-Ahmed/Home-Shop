import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const addCarts = 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
    const handleToCart=(products)=>{
        console.log('check');
    }
    return (
        <div className='shop-Container'>
            <div className='product-Container'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}

                />)
            }
            </div>
            <div className="Card-Container">
            <h4>order summary</h4>
            <p>Selected Items:{}</p>
            </div>
        </div>
    );
};

export default Shop;