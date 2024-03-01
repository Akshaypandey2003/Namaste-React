import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../util/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items);

  const dispath = useDispatch();
  const handleClearCart = ()=>{
   dispath(clearCart());
  }
  
  return (
    <div className=" text-center w-1/2 m-auto font-bold text-2xl p-4">
      <h2>Cart</h2>
      <button className="border-2 p-2 bg-black text-white rounded-lg" onClick = {handleClearCart}> Clear Cart</button>
      {cartItems.length==0 && <h1>Please add some items to the cart</h1>}
      <div className="p-2">
      { 
      cartItems.map((items,id)=><MenuItems key = {id} itemsInfo= {items}/>)}
      </div>
     
    </div>
  );
};
export default Cart;
