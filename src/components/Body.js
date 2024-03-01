import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { RestaurantDataAPI } from "../util/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {

  //updating the restaurants data
  const [data, setData] = useState([]);

  // updating filteredRestaurants based on various conditions-->
  const [filteredRestaurants, updateFilteredRestaurants] = useState([]);

  //updating searchText when text is entered inside input area--->
  const [searchText, updateText] = useState("");

  //Higher order component --------->
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // ---this Use Effect performs the operation when it recieves the data from server.

  useEffect(() => {
    fetchData();
  }, []);

  //call back function for useEffect(), it is for fetching the restaurants data from the server
  const fetchData = async () => {
    const restaurants = await fetch(RestaurantDataAPI);
    //- converting the received data into json format
    const jsonData = await restaurants.json();
   
    

    // updating the data received by server
    setData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    //- updating the filtered restaurants based on conditions->
    updateFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>please check your internet connection</h1>;

  //----- conditional rendering ---------
  return data.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search  my-2 p-2">
        <div className="search-input flex justify-center items-center  ">
          <input
            className="input w-1/2 mx-4 h-12 bg-gray-200 rounded-lg hover:bg-gray-300"
            data-testid = "searchInput"
            type="text"
            value={searchText}
            onChange={(e) => {
              updateText(e.target.value); // set the searchText
            }}
          ></input>
          <button
            className="search-btn btn mx-4 w-28 h-10 rounded-3xl  bg-gradient-to-tr from-slate-700 to-slate-400 hover:scale-110"
            onClick={() => {
              const filterResult = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              updateFilteredRestaurants(filterResult);
            }}
          >
            Search
          </button>
          <div className="dropdown  text-center w-48 h-10 rounded-3xl hover:bg-black bg-gradient-to-tr from-slate-700 to-slate-400 hover:scale-110">
            {/* <button className="dropbtn btn border-2 border-red-900"></button> */}
            <div className="dropdown-content p-2">
              <button
                className="option-btn"
                onClick={() => {
                  const filterResult = data.filter(
                    (res) => res.info.avgRating > 4
                  );
                  updateFilteredRestaurants(filterResult);
                  {
                    filteredRestaurants.map((res, id) => (
                      <RestaurantCard key={id} resData={res} />
                    ));
                  }
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="res-container px-40">
        <div className="restaurants-card-container flex flex-wrap items-center  p-3 justify-between">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
             { restaurant.info.promoted?<RestaurantCardPromoted resData = {restaurant}/>:
              <RestaurantCard resData={restaurant} />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
