import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { additems } from "../utils/Cartslice";
const Itemlist=({items})=>
{
    const dispatch=useDispatch();
    const handle =(item)=>{
    dispatch(additems(item));
    }
    return(
        <div>
              {items.map((item)=>(

              <div className="border-bm text-left border-b-2 p-2 mx-2 ">
                <div key={item.card.info.id} className=" font-bold flex">
                    <div className="w-40 text-right m-3">
                    <div className="absolute bg-white ">
                <button onClick={()=>handle(item)}>Add+</button>
                </div>  
                <img src={CDN_URL + item.card.info.imageId} />
                    
                </div>
                <div className="m-5 my-11">
                    <span>{item.card.info.name}</span>
                    <span>₹--{item.card.info.price/100}</span>
                </div>
                </div>
               
                <p className="text-xs">{item.card.info.description}</p>
                
                
                </div>))}
        </div>
    );
}
export default Itemlist;