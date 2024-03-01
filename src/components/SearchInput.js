import resInfoObj from "../util/Data";
import { useState } from "react";
// import Body from "./Body";
import RestaurantCard from "./RestaurantCard";

const SearchInput = () => {
  // State Variable : maintains the states of our application/component
  //hooks---->

  const [data, setData] = useState(resInfoObj);

  const [searchText, updateSearchText] = useState("");

  return (
    <div className="search-input">
      <input className="input" type="text" placeholder="Get your meal" value={searchText}></input>
      <button className="search-btn btn" onClick={()=>{}}>Search</button>



      <div className="dropdown">
        <button className="dropbtn btn">Filter</button>
        <div className="dropdown-content">
          <button
            className="option-btn"
            onClick={() => {
              const filteredRestaurants = data.filter(
                (res) => res.info.avgRating > 4
              );
              setData(filteredRestaurants);
              {data.map( res => <RestaurantCard key = {res.info.id} resData = {res}/>)}
              console.log(data);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchInput;
