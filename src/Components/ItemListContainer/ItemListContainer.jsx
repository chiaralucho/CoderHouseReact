import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";
import { CardProduct } from "../CardProduct/CardProduct";
import { useParams } from "react-router-dom";
import styles from "./ItemListContainer.module.css"


export const ItemListContainer = () => {


  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(resp => {
        if(category){
          const productsFilter = resp.filter((product) => product.category === category);
          setProducts(productsFilter);
          setIsLoading(false);
        }else{
             setProducts(resp);
           setIsLoading(false);
        }

      })
      .catch(error => console.log(error))
  }, [category])

  return (
    <div className={`${styles.ItemListContainer}`}>
      <h2>Productos:</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-around col-12 flex-row flex-wrap">
            {
              isLoading ? <h3 className="col-12 text-align-center">Cargando productos... </h3> :
              products.map(product => <CardProduct key={product.id} {...product} />)
            }
          </div>
        </div>
      </div>

    </div>
  )
}