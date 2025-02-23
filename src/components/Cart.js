import { clearitems } from "../utiles/cartslice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartitm = useSelector((store) => store.cart.items);
    console.log(cartitm);
    
    const dispat =useDispatch();
    const handed =()=>{
        dispat(clearitems());
    }
    return (
        <div>
            <div className="w-6/12 m-auto">
                <button className=" w-24 bg-black text-white rounded-lg text-center m-3 p-3" onClick={handed}>clear cart</button>
                {cartitm.length === 0  && <h1>cart is empty try to Add items </h1>}
                <ItemList itams={cartitm} />
            </div>
        </div>
    )
};
export default Cart;