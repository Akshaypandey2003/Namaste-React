import { CDN_URL } from "../util/constants";

const RestaurantCard = (props) =>{

    const {resData} = props;
    const{name,cloudinaryImageId,cuisines,avgRatingString} = resData?.info;  
    const{deliveryTime,serviceability} = resData?.info.sla;

      return (
          <div className="res-card">
            <div className="res-card-img">
            <img className="restaurant-img"src={CDN_URL+cloudinaryImageId} alt="restaurant-card" />
            </div>
            <div className="res-desc">
               <h3>{name}</h3>
               <p>{cuisines.join(", ")}</p>
               <div className="desc-details">
               <span id="rating">{avgRatingString}<span id="star">⭐</span></span>
               <span id="time">{deliveryTime} mins</span>
               <span id="availability">{serviceability}</span>
               </div>
              
            </div>
          </div>
      );
  }
  export default RestaurantCard;