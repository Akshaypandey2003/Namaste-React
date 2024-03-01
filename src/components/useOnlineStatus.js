
import { useState, useEffect } from "react";
const useOnlineStatus = () => {

    const [onlineStatus, setStatus] = useState(true);
    // check if online or offline
    useEffect(()=>{
      window.addEventListener("online",()=>{
        setStatus(true);
      });
      window.addEventListener("offline",()=>{
        setStatus(false);
      });
    },[]);

    return onlineStatus;
}
export default useOnlineStatus;