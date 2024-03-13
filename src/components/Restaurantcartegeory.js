import Itemlist from "./Itemlist";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
const Restaurantcartgeory =({data,Reda ,setReda}) =>{
    console.log(data);
    // const[reda,setreda]=useState(false);
  
    const handleClick=()=>
    {
        setReda(); 
    }


    return (
        <div>
            <div className="header my-5 w-6/12 m-auto bg-gray-50  shadow-lg h-auto">

                <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span>
                🔽
            </span>
            </div>
          {Reda &&  <Itemlist items={data.itemCards}/>}
            </div>
 
        </div>
    )
}
export default Restaurantcartgeory;