import { useDispatch } from "react-redux";
import { CDN_URL } from "../util/constants";
import { vegLogo,nonVegLogo } from "../util/constants";
import {addItem} from "../util/cartSlice";


const MenuItems = (props) => 
{
  const { itemsInfo } = props;

  const {
    name,
    imageId,
    price,
    defaultPrice, 
    description,
    isBestseller,
    isVeg,addons
  } = itemsInfo.card.info;

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
     //dispatch an action
      dispatch(addItem(item));
  };

  return (
    <div className="menu-items-card border-b-2 border-gray-300 m-2 flex items-center justify-between p-4 leading-6">
      <div className="menu-items-details p-2 text-left w-full">
        <div className="flex">
          {isVeg ? <img className="w-6" src= {vegLogo}></img>:<img className="w-6" src={nonVegLogo}></img>}
          <span>{isBestseller && "⭐Best seller"}</span>
        </div>
        <h2 className="text-2xl">{name}</h2>
        <h3 className="font-semibold">
          ₹ 
          {price ? price / 100 : defaultPrice / 100}
        </h3>
        <p className="my-4 text-gray-400 font-light text-lg">{description}</p>
      </div>
      <div className="menu-items-img ">
        <img src={CDN_URL + imageId} className="h-36 w-52 rounded-2xl"></img>
        <div className="relative bottom-6 flex flex-col items-center">
        <button className="add-item-btn p-2  text-white w-20 bg-black rounded-lg cursor-pointer" onClick={()=>handleAddItem(itemsInfo)}>
          Add +
        </button>
        <span className="text-sm text-gray-400">{addons && "Customisable"}</span>
        </div>
       
      </div>
    </div>
  );
};
export default MenuItems;
