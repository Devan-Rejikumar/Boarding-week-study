import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const cartContext = createContext(null);

const carts = ({children}) => {
    const [cart,setCart] = useState([]);
    const addToCart = (product) =>{
        setCart((prev)=>[...prev,product])
    }
  return (
    
      <cartContext.Provider value={{addToCart,cart,setCart}}>
        {children}
      </cartContext.Provider>
    
  )
}

export default carts
