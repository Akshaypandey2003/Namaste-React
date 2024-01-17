import RestaurantCard from "./RestaurantCard";
import resInfoObj from "../util/Data";
import SearchInput from "./SearchInput";


const Body = () =>{
    return (
      <div className="body">
          <div className="search">
             <SearchInput/>
          </div>
          <div className="res-container">
           {
            resInfoObj.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
           }
          </div>
      </div>
    );
}
export default Body;