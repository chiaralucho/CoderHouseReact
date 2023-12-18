import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ( { children } ) =>{    

const [cart, setCart] = useState([]);

const addProductToCart = (product) => {

  const currentProduct = cart.find(productCart => productCart.id === product.id);

  if(currentProduct){
  
    currentProduct.count = product.count;

  }else{
    setCart([...cart, product]);

  }
}

    return <GlobalContext.Provider value={{cart, addProductToCart}}> {children} </GlobalContext.Provider>
}
 