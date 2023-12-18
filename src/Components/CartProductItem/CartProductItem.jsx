import { Link } from 'react-router-dom'
import styles from './CartProductItem.module.css'

export const CartProductItem = ({id, name, description, img}) => {
  return (
    <div className={`d-flex flex-column align-items-center col-2 my-3 ${styles.cardProduct}`}>
      <img className={`${styles.cardImg}`} src={img} alt="" />
      <div className="d-flex flex-column align-items-center justify-content-between">
        <h5>{name}</h5>
        <p>{description}</p>
        <Link to={`/item/${id}`}>
          <button className="btn btn-secondary my-2">Detalle</button>
        </Link>
        </div>
    </div>
  )
}
