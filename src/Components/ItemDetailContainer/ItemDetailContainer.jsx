import { useEffect, useState } from "react";
import { getProduct } from "../../productMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import styles from './ItemDetailContainer.module.css';  

export const ItemDetailContainer = () => {

 const [product, setProduct] = useState(null);

    const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then(resp => {
        setProduct(resp);
      })
      .catch(error => console.log(error))
  }, [product])

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex col-12 flex-row flex-wrap p-0">
          { product && <ItemDetail {...product} /> }
          </div>
        </div>
      </div>
    </div>
  )
}