import { useEffect,useState } from "react";
import { RestaurantMenuDataAPI } from "constants";

const useRestaurantMenu = (resId)=>{
    
    const [resMenuInfo,setResInfo] = useState(null);

    //fetch data
    useEffect(()=>{    
        fetchData();
    },[]);
    
    const fetchData = async ()=>{

        const menuData = await fetch(RestaurantMenuDataAPI + resId);
        const json = await menuData.json();
        setResInfo(json.data);
    };
    return resMenuInfo;
};
export default useRestaurantMenu;