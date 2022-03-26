import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Quantity from '../../Shopquantity/Quantity';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faDeleteLeft, faRemove, faRemoveFormat,faRandom,} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [addCarts, setAddCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])

    const handleToCart=(product)=>{
        console.log('check',product);
        const newCart = [...addCarts, product];
        setAddCart(newCart)
    }
    const RemoveItem= () =>{
        setAddCart([]);
    }
    const randomCart = () => {
        if(addCarts.length > 0) {
            const randomValue = Math.floor(Math.random() * addCarts.length);
            const luckyNumber = addCarts[randomValue];
            setAddCart([luckyNumber])
        }
    }
    
    return (
        <div className='shop-Container'>
             <div className="Card-Container">
                <h2>Choice</h2>
                {
                    addCarts.map((addCart) => <Quantity 
                    key={addCart.id}

                    addCart={addCart}
                    RemoveItem={RemoveItem}
                    />)
                }
                <button onClick={randomCart} className='random'> Random Add 
            <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>

                </button>

                <button onClick={RemoveItem} className='random'>remove All 
            <FontAwesomeIcon icon={faRemoveFormat}></FontAwesomeIcon>

                </button>

            </div>

            <div className='product-Container'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleToCart={handleToCart}


                />)
            }
            </div>
           
        </div>
    );
};

export default Shop;