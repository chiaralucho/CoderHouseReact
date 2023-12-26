import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { CartProductItem } from "../CartProductItem/CartProductItem.jsx";
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {cart} = useContext(GlobalContext);
    const cartTotal = cart.reduce((sum, item) => sum + (item.count * item.price), 0);

    return (
        <div className="containerfluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-end align-items-center p-2">
                <p className=" p-0 mx-2 my-0 ">Total: ${cartTotal}</p>
                <Link to={"/"} className="col-2 me-4">
                <button className="btn btn-success col-12">Finalizar Compra</button>
                </Link>
                </div>
                {cart.map(product => <CartProductItem className="col-3" key={product.id} {...product} />)}
            </div>
        </div>
    )
}