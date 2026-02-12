import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { cartContext } from './cart';


const Product = () => {
    const [product,setProduct] = useState([]);
    const addToCart = useContext(cartContext);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    },[])
  return (
    <div>
        <h1>Product List</h1>
        {product.map((item)=>(
            <div key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.image} alt="" />
                <h3>{item.price}</h3><button onClick={addToCart}>Add to Cart</button>
            </div>
        ))}
      
    </div>
  )
}

export default Product

