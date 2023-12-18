import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { CartProductItem } from "../CartProductItem/CartProductItem.jsx";

export const Cart = () => {
    const {cart} = useContext(GlobalContext);

    return (
        <div className="containerfluid">
            <div className="row">
                {cart.map(product => <CartProductItem className="col-3" key={product.id} {...product} />)}
            </div>
        </div>
    )
}