import { LOGO_URL } from "../util/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // subscribing to the store using selector---->
  const cartItems = useSelector((store)=>store.cart.items);
  // console.log(cartItems);

  const [btnName, updateBtn] = useState("Login");

  const updateState = (state) => {
    state == "Login" ? updateBtn("Logout") : updateBtn("Login");
  };
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="header flex items-center justify-between sticky shadow-xl p-2 bg-gradient-to-tr from-slate-900 to-slate-500" >
      <div className="logo-container">
        <img className="logo w-24 border-4 rounded-full" src={LOGO_URL} alt="loading" />
      </div>
      <div className="nav-items  mr-8">
        <ul className="flex items-center justify-between p-3  from-neutral-900 text-lg text-white">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 font-bold">
            <Link to = "/cart">Cart-({cartItems.length} items)</Link>
          </li> 
          <button className="login-btn mx-2 rounded-xl  p-2 hover:bg-slate-900 hover:text-zinc-400" onClick={() => updateState(btnName)}>
            {btnName}
          </button>

          <li className="text-white text-lg font-bold"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
