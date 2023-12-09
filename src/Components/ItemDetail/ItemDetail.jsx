import { Count } from "../Count/Count"
import styles from './ItemDetail.module.css'




export const ItemDetail = ({id,name, description, img}) => {
  return (
    <>
    <img className={`col-6 ${styles.cardImg}`} src={img} alt="" />
    <div className="col-6 d-flex flex-column align-items-center justify-content-between">
      <h2>{name}</h2>
      <p>{description}</p>
      <Count className="col-12 my-3" />
      <button className="btn btn-secondary my-2">Agregar al carrito</button>
      </div>
    </>
  )
}
