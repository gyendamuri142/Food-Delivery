import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resList} = props;
    /**
     * * Optional chaining is a feature introduced in JavaScript that provides a 
     * concise way to access properties or call functions on an object that
    *  might be null or undefined without causing an error. 
    * It allows you to avoid lengthy and repetitive null checks 
    * before accessing nested properties or calling nested functions.
    */
    const {  cloudinaryImageId, cuisines, totalRatings, deliveryTime, name, avgRating } = resList?.info;
    return(
        <div className="m-3 p-4 w-[270px] bg-gray-100 rounded-lg">
            <img 
            className="rounded-lg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <p>{cuisines .join(" . ")}</p>
            <p>{totalRatings} STARS</p>
            <p>Rating {avgRating} </p>
        </div>
    )
}

export const Compwithp=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label>promoted</label>
            </div>
        )
    }
}

export default RestaurantCard;