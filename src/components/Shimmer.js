import Shimmer_search from "./shimmer-searchArea";
import Shimmer_restaurant_cards from "./Shimmer-restaurant-cards";

const Shimmer = () => {
  return (
    <div className="shimmer-container ">
      <div className="shimmer-search-container">
        <Shimmer_search />
      </div>
      <div className="shimmer-card-container flex flex-wrap justify-evenly p-10">
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
        <Shimmer_restaurant_cards/>       
      </div>
    </div>
  );
};
export default Shimmer;