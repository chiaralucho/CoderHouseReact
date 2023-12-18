import styles from './CartWidget.module.css'
import { GiShoppingCart } from "react-icons/gi"
import { Link } from 'react-router-dom'
import { GlobalContext } from "../../Context/GlobalContext"
import { useContext} from 'react'


export const CartWidget = () => {

   
    const {cart} = useContext(GlobalContext);
    
    return (
      <div className="container-fluid">
            <div className="row">
                <div className="d-flex align-items-center">
                    <Link to={"/cart"}>
                    <GiShoppingCart color="white" size={30}/>
                    </Link>
                    <p className='mx-2 p-0 m-0'>{cart.length}</p>
                </div>
            </div>
        </div>
    )
}
