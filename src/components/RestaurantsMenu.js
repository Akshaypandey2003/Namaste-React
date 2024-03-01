import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import RestaurantsMenuPage from "./RestaurantsMenuPage";
import { useParams } from "react-router-dom";
import { RestaurantMenuDataAPI } from "../util/constants";
import useRestaurantMenu from "../util/useRestaurantMenu";
import { useSelector } from "react-redux";


const Restaurantsmenu = () => {

  const items = useSelector((store)=>store.cart.items);

  const { resId } = useParams([]);

  const [resMenuInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menuData = await fetch(RestaurantMenuDataAPI + resId);
    const json = await menuData.json();
    setResInfo(json.data);
    setMenuItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    
  };
 
 
  const itemCategories = menuItems?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  const [filterText, setFilterText] = useState("All");

  const applyFilter = (state) => {
    const ele = document.getElementById("menu-filter-btn");
    if (state == "Veg") {
      setFilterText("All");
      ele.style.background = "none";
    } else {
      setFilterText("Veg");
      ele.style.background = "green";
    }
  };

  if (resMenuInfo == null) return <Shimmer />;

  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    resMenuInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu-container  text-center flex flex-col items-center">
      <div data-testid = "menuHeader" className="menu-header  flex items-center justify-between w-1/2 border-b-4  border-dashed mt-8 p-4">
        <div className="menu-res-desc">
          <h1 className="font-semibold text-2xl text-left text-gray-900">
            {name}
          </h1>
          <p className=" text-left mt-2 ml-1">{cuisines.join(", ")}</p>
          <p className="text-left ml-1">{areaName}</p>
        </div>
        <div className="menu-res-rating border-2 p-2 rounded-xl">
          <div className="menu-rating-star text-lg font-bold border-b-2 p-2">
            <span id="menu-star">⭐</span>
            <span>{avgRating}</span>
          </div>
          <div className="menu-rating-numbers p-2 ">
            <p>{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="my-4 w-1/2 text-left">
        <button
          className="menu-filter-btn border-2 border-slate-600 bg-black text-slate-200 w-24 h-10 m-2 rounded-2xl"
          onClick={() => applyFilter(filterText)}
        >
          {filterText}
        </button>
      </div>
      {/* Controlled component */}
      <div className="w-1/2 p-4">
        
        {itemCategories.map((res, id) => (
          <RestaurantsMenuPage
            key={id}
            menuInfo={res}
            menuState={id === showIndex ?true:false}
            // menuState = {true}
            setShowIndex = {()=>setShowIndex(id)}
          /> 
        ))}
      </div>
    </div>
  );
};
export default Restaurantsmenu;
