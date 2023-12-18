import styles from './ItemDetail.module.css'
import { useContext } from "react"
import { useCount } from "../../hooks/useCount"
import { GlobalContext } from '../../Context/GlobalContext'

export const ItemDetail = ({id, name, description, img}) => {

  const { addProductToCart, cart } = useContext(GlobalContext);

  const {count, increment, decrement} = useCount(); 


  const handleAddProduct  = () =>{
    const product = {
      id,
      name,
      img,
      description,
      count
  };
  addProductToCart( product );
  }

  return (
    <>
      <img className={`col-6 ${styles.cardImg}`} src={img} alt="" />
      <div className="col-6 d-flex flex-column align-items-center justify-content-between">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className=" d-flex flex-row align-items-center justify-content-center">
          <div className={`d-flex felx-column align-items-center justify-content-center col-12 my-2 ${styles.CountDiv}`}>    
            <button className={`${styles.btnCount} btn btn-secondary`} onClick={increment}>
              +
            </button>
            <p className='mx-3 my-0'>
              {count}
            </p>
            <button className={`${styles.btnCount} btn btn-secondary`} onClick={decrement}>
              -
            </button>
          </div>
          <button className="col-7 btn btn-secondary my-2" onClick={ handleAddProduct }>Agregar al carrito</button>
        </div>
      </div>
    </>
  )
}
