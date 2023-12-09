import { useState } from "react"

export const useCount = (initial = 0) => {

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