import { useEffect,useEffect, useState } from "react";
import Remenudata from "../utils/resmenudata";
import Restaurantcartgeory from "./Restaurantcartegeory";

const Restaurantmenu=()=>
{
    const [resmenu,setresmenu]=useState(Remenudata);
    const[Reda,setReda]=useState(0);
    // setresmenu(Remenudata);
//   useEffect(
//         ()=>{
//                 fetchdata();
//         },[]
//     );
    // fetchdata = async() =>{

    //     const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=375041&isMenuUx4=true&submitAction=ENTER');
    //     const json=  await data.json();
    //     // console.log(json);
    //     // setresmenu(json.data);
    //     // setresmenu(resmenu?.cards[0]);
    //     // setresmenu(resmenu?.card);
    //     // setresmenu(resmenu?.card);
    //     // setresmenu(resmenu?.text);
        
        
        // console.log(resmenu.data);
        const categories=resmenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>(c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        // console.log(resmenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>(c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")));
    


    // };
    const {itemCards}=resmenu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0];

    return(

        <div className="Resmenu m-10 text-center"> 
        <h1 className="font-bold m-5 text-2xl">{resmenu.data.cards[0].card.card.info.name}</h1>
  
        <h2 className="text-lg"> Average Rating{resmenu.data.cards[0].card.card.info.avgRating}
        </h2>

{/* 
          <h2>MENU</h2> */}
            {/* <ol>
                {itemCards.map((item)=><li>{item.card.info.name}-{item.card.info.price/100}</li>)}
            </ol> */}
          <p>
            {categories.map((c,index)=>(<Restaurantcartgeory data={c.card.card}
             Reda={index===Reda ? true :false}
             setReda={()=>setReda(index)}/>))}
             
          </p>
        </div>

    )
};

export default Restaurantmenu;