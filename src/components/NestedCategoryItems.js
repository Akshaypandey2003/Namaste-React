import { useState } from "react";
import MenuItems from "./MenuItems";

const NestedItemCategoryItems = (props)=>{

   const {itemsInfo,menuState,setCategorizedItem} = props;

   
   const {title,itemCards} = itemsInfo;
    
   var handleClick = ()=>{
    setCategorizedItem();
   }
    return (
        <div className="menu-categories border-b-4 shadow-sm  m-2 bg-gray-100">
        <div className="menu-categories-header shadow-sm h-20 p-4 flex items-center justify-between cursor-pointer" onClick={()=>handleClick()}>
          <h1 className="font-bold text-xl">
            {title}({itemCards.length})
          </h1>
          <span id="arrow-icon ">
            <img
              className="w-10"
              src="https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg"
            ></img>
          </span>
        </div>
  
        <div className="menu-items-container">
         {menuState && itemCards.map((items,id)=>(<MenuItems key = {id} itemsInfo = {items}/>))} 
        </div>
      </div>
    );
}
export default NestedItemCategoryItems;