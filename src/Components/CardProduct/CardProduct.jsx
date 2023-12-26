import { Link } from 'react-router-dom'
import styles from './CardProduct.module.css'

export const CardProduct = ({id, name, description, img, price}) => {
  return (
    <div className={`d-flex flex-column align-items-center col-2 my-3 ${styles.cardProduct}`}>
      <img className={`${styles.cardImg}`} src={img} alt="" />
      <div className="d-flex col-12 p-2 flex-column align-items-center justify-content-between">
        <h5>{name}</h5>
        <p className={`${styles.description}`}>{description}</p>
        <p>${price}</p>
        <Link to={`/item/${id}`}>
          <button className="btn btn-secondary col-12 p-1 m-0">Agregar al carrito</button>
        </Link>
        </div>
    </div>
  )
}
