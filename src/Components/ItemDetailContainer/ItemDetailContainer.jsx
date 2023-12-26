import { useEffect, useState } from "react";
import { collection, doc, getDocs, query } from 'firebase/firestore'
import { db } from '../../Config/firebaseConfig'
import { ItemDetail } from "../ItemDetail/ItemDetail";
import styles from './ItemDetailContainer.module.css';  
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

  const { id } = useParams()
 
  const[product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  useEffect(()=> {

    const myProducts = query(collection(  db, "products"));
    getDocs(myProducts)
        .then( resp => {
          const productFiltered = resp.docs.find(doc => doc.id === id)
          const productData = {id: productFiltered.id, ...productFiltered.data()}
                                      
          setProduct(productData)
          setIsLoading(false)
        })
        .catch(error => console.log(error))
}, [])


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex col-12 flex-row flex-wrap p-0">
          { isLoading ? <h3 className="col-12 text-align-center">Cargando producto... </h3> : <ItemDetail {...product} /> }
          </div>
        </div>
      </div>
    </div>
  )
}