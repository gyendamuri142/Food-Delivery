import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../utils/Cartslice";

const Cart=()=>{
    const cartitems=useSelector((store)=>store.Cart.items);
    dispatch=useDispatch();
    const handleclear=()=>{
        dispatch(clearcart());

    };
    return(
        <div className="text-center">
 <button className="text-white bg-black font-bold rounded-xl p-2 m-3" onClick={handleclear}> clearcart</button>
<div>
    <Itemlist items={cartitems}/>
</div>
        </div>


    )
}
export default Cart;