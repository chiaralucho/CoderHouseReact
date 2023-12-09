import React from 'react';
import { useCount } from "../../hooks/useCount";
import styles from './Count.module.css';

export const Count = () => {

  const {count, increment, decrement} = useCount(); 

  return (
    <div className={`d-flex felx-column justify-content-center col-12 my-2 ${styles.CountDiv}`}>    
        <button className={`${styles.btnCount}`} onClick={increment}>
          +
        </button>
        <p className='mx-3'>
          {count}
        </p>
        <button className={`${styles.btnCount}`} onClick={decrement}>
          -
        </button>
    </div>
  )
}
