import { useEffect, useState } from "react";
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../Config/firebaseConfig'
import { CardProduct } from "../CardProduct/CardProduct";
import { useParams } from "react-router-dom";
import styles from "./ItemListContainer.module.css"
import { isEmpty } from "@firebase/util";


export const ItemListContainer = () => {


  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {

    const myProducts = query(collection(  db, "products"));
    getDocs(myProducts)
        .then( resp => {
          const productsLists = resp.docs
                                      .filter(doc => doc.data().category === category || isEmpty(category))
                                      .map(doc => ({id: doc.id, ...doc.data()})) 
          setProducts(productsLists)
          setIsLoading(false)
        })
        .catch(error => console.log(error))
}, [category])



  return (
    <div className={`${styles.ItemListContainer}`}>
      <h2>Productos:</h2>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-around flex-row flex-wrap">
          
            {
              isLoading ? <h3 className="col-12 text-align-center">Cargando productos... </h3> :
              products.map(product => <CardProduct key={product.id} {...product} />)
            }
         
        </div>
      </div>
    </div>
  )
}