import { Link } from 'react-router-dom'
import styles from './CartProductItem.module.css'
import {useContext} from "react"
import { GlobalContext } from '../../Context/GlobalContext'

export const CartProductItem = ({id, name, img, count, price}) => {

  const {removeProduct} = useContext(GlobalContext);

  const deleteProduct = () => {
    removeProduct(id)
  }

  return (
    <div className="container-fluid">
      <div className={`row ${styles.cardProduct}`}>
        <div className="col-12 d-flex flex-row align-items-center justify-items-around">
            <img className="mx-1" src={img} alt="" />
            <h5 className='m-0 p-0'>{name}</h5>
            <p className='m-0 p-0'>${price} - {count}kg</p>
            <div className={`${styles.line}`}></div>
            <p className='m-0 p-0'>Total: ${price * count}</p>
          <button onClick={deleteProduct}>Delete</button>
        </div>
      </div>
    </div>
    
  )
}
