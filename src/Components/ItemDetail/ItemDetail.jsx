import styles from './ItemDetail.module.css'
import { useContext } from "react"
import { useCount } from "../../hooks/useCount"
import { GlobalContext } from '../../Context/GlobalContext'
import { Link } from 'react-router-dom'
//import { discountStock } from '../Products/Products'


export const ItemDetail = ({id, name, description, img, price}) => {

  const { addProductToCart } = useContext(GlobalContext);

  const {count, increment, decrement} = useCount(id); 

  const handleAddProduct  = () =>{
    //discountStock(id);
    const product = {
      id,
      name,
      img,
      description,
      count, 
      price
  };
  addProductToCart( product, count );
  }

  return (
    <div className="container-fluid">
      <div className="row">
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
                {count}kg
              </p>
              <button className={`${styles.btnCount} btn btn-secondary`} onClick={decrement}>
                -
              </button>
            </div>
            <div>
              <div className=" d-flex flex-column align-items-center justify-content-center">
                <Link to={"/"}>
                  <button className=" btn btn-secondary my-2" onClick={ handleAddProduct}>Agregar al carrito</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>1
    </div>
  )
}
