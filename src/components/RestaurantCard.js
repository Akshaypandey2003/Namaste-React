import { CDN_URL } from "../util/constants";

const RestaurantCard = (props) =>{

    const {resData} = props;
    var{name,cloudinaryImageId,cuisines,avgRatingString} = resData?.info;  
    const{deliveryTime,serviceability} = resData?.info.sla;
      
    var cuisinesText = "";
    var i = 0;
    for(; i<cuisines.length; i++)
    {
      if(i>2)
      break;
      cuisinesText = cuisinesText+cuisines[i]+", ";
    }
    if(i<cuisines.length)
    cuisinesText = cuisinesText+"....";
    
    if(name.length>23)
    name = name.substring(0,24)+".....";
      return (
       
          <div data-testid = "resCard" className="res-card   flex flex-col my-3 hover:scale-90">
            <div className="res-card-img  overflow-hidden object-cover">
            <img className="restaurant-img w-96 h-60 rounded-2xl"src={CDN_URL+cloudinaryImageId} alt="restaurant-card" />
            </div>
            <div className="res-desc w-80 my-2 ml-2 ">
               <h1 className="font-semibold text-2xl text-gray-900">{name}</h1>
               <p className="text-lg">{cuisinesText}</p>
               <div className="desc-details text-wrap">
               <span id="rating">{avgRatingString}<span id="star">⭐</span></span>
               <span id="time">{deliveryTime} mins</span>
               <span id="availability">{serviceability}</span>
               </div>
            </div>
          </div>
      );
  }
  export const withPromotedLabel = (RestaurantCard)=>{
     return (props)=>{
      return(
        <div>
          <label>Promoted</label>
           <RestaurantCard {...props}/>
        </div>
      )
     }
  }
  export default RestaurantCard;