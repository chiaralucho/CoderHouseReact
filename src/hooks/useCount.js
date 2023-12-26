import { useState, useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext";

export const useCount = (productId) => {

    let initial;

    const {cart } = useContext(GlobalContext);

    const currentProduct = cart.find(productCart => productCart.id === productId);

   currentProduct ? initial = currentProduct.count : initial = 0

    const [count, setCount] = useState(initial);

    const increment = () =>{
        setCount(count +1);
    }

    const decrement = () =>{

        count === 0 ? count : setCount(count -1);
    }

    return {
        count, 
        increment,
        decrement,
    }
}