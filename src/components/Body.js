import RestaurantCard, {Compwithp}from "./RestaurantCard";
import resList from "../utils/mock_data";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
import Restaurantmenu from "./Restaurantmenu";
import { useContext } from "react";
import UserContext from "../utils/Usercontext";

const Body = () => {

  

const[list, setList] = useState([]);
const[filterRestaurant, setFilterRestaurant] = useState([]);
const[searchText, setSearchText] = useState("");
// const{setusername}=useContext(UserContext);

const {username,setusername}=useContext(UserContext);



  useEffect(()=>{
    fetchData();
  },[]);

 
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true');
    const json = await data.json();
    // console.log(json);
  
    setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // setSearchText(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
    
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json.data);
   
   
  };
 
  if(list.length === 0) {
    return <Shimmer />;
  }
  const Withpromoted=Compwithp(RestaurantCard);

 

    return   (
      
        <div className="body">
            <div className="filter flex">
             
              <div className="search">
                
                <input type="text" 
                className="m-1 p-1 border border-solid border-black " 
                value={searchText} 
                onChange={(e)=>{
                  setSearchText(e.target.value)
                }} />
                <button className="m-2 px-7 p-2 bg-green-200"onClick={() => {
   
                  console.log(searchText);
                  const filterRestaurant = list.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 
                  setFilterRestaurant(filterRestaurant);
                }}>Search Button</button>
              </div>
              
      
                <button 
                className="m-2 px-7 p-2 bg-gray-200"
                onClick={()=>{
                 
                  const filterList = list.filter(restaurant=>restaurant.info.avgRating>=4.3);
                  setFilterRestaurant(filterList);
                }}>Top Rated Restaurant</button>
            </div>
            {/* <div className="m-2 px-7 p-2 bg-gray-200">
              <input className=""
              value={username} onChange={(e)=>setusername(e.target.value)}/>
            </div> */}
            <div className="flex flex-wrap">
            <Link className="flex flex-wrap" to="Restaurantmenu">   {
                
                filterRestaurant.map((restaurant) => (
                  
                <RestaurantCard key={restaurant.info.id} resList={restaurant} />)) }  
                  </Link>
                
            </div>
        </div>
        
    )
}

export default Body;