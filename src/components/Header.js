import { useState,useContext,} from "react";
import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "./useOnlinestatus";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

export const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlst=useOnlinestatus();
    const {loggedinuser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.Cart.items);

    return(
        <>
        <div className="flex justify-between bg-green-100 shadow-xl">
            <div className="w-40">
                <img className="logo" src={LOGO_URL} />
            </div>
        
        <div className="flex items-center">
            <ul className="flex p- 4 m-5">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="about">About Us</Link></li>
                <li className="px-4"><Link to="contact">Contact Us</Link></li>
                <li className="px-4">status:{onlst?"✅":"❌"}</li>
                <li className="px-4"><Link to="Cart">Cart({cartItems.length})</Link></li>
               
                <button className="px-4"
                    onClick={()=>{
                    btnName === 'Login' ? setBtnName("LogOut") : setBtnName("Login")
                }}>{btnName}</button>
                   <li>{loggedinuser}</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Header;