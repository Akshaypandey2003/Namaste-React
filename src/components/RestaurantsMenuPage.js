import { useState } from "react";
import MenuItems from "./MenuItems";
import NestedCategoryItems from "./NestedCategoryItems";
const RestaurantsMenuPage = (props) => {


  const {menuInfo,menuState,setShowIndex} = props;

  const { title, itemCards, categories } = menuInfo?.card?.card;

  const [showCategorizedItem, setCategorizedItem] = useState(0);

  var handleState = ()=>{ 
    setShowIndex();
  }

  return (
    //Accordian for restaurants menu--->
    <div className="menu-categories border-b-4 shadow-sm  m-2" >
      <div className="menu-categories-header border-2 shadow-sm h-20 p-4 flex items-center justify-between cursor-pointer" onClick={()=>handleState()} >
        <h1 className="font-bold text-xl">
          {title}({itemCards ? itemCards.length : categories.length})
        </h1>
        <span id="arrow-icon ">
          <img
            className="w-10"
            src="https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg"
          ></img>
        </span>
      </div>
      { /* Controlled component */}
      <div className="menu-items-container">
        {menuState &&
          categories &&
          categories.map((items, id) => (
            <NestedCategoryItems
              key={id}
              itemsInfo={items}
              menuState = {id == showCategorizedItem?true:false}
              setCategorizedItem = {()=>setCategorizedItem(id)}
            />
          ))}
        {menuState &&
          itemCards &&
          itemCards.map((items, id) => (
            <MenuItems key={id} itemsInfo={items} />
          ))}
      </div>
    </div>
  );
};
export default RestaurantsMenuPage;
