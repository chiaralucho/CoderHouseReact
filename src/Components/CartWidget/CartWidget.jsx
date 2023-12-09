import styles from './CartWidget.module.css'
import { GiShoppingCart } from "react-icons/gi";

export const CartWidget = () => {
    return (
        <div className="row">
            <div className="container">
            <div className="d-flex align-items-center">
            <GiShoppingCart color="white" size={30}/>
        <p className='mx-2 p-0 m-0'>99</p>
        </div>
            </div>
        </div>
        
    )
}
