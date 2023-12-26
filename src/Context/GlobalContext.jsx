import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ( { children } ) =>{    

const [cart, setCart] = useState([]);

const addProductToCart = (product, newCount) => {

  const currentProduct = cart.find(productCart => productCart.id === product.id);

    currentProduct ? currentProduct.count = newCount : setCart([...cart, product])
}


const removeProduct = (productId ) => {

  setCart(
    cart.filter(product => product.id != productId)
  )

}


    return <GlobalContext.Provider value={{cart, addProductToCart, removeProduct}}> {children} </GlobalContext.Provider>
}
 