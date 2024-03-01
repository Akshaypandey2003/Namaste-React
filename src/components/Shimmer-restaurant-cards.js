const Shimmer_restaurant_cards = () => {
  return (

      <div className="shimmer-res-card  p-4 w-96 rounded-3xl m-4 bg-gray-200">
        <div className="shimmer-res-card-img  h-52 w-full rounded-3xl bg-gray-300"></div>
        <div className="shimmer-res-desc ">
          <h3 className="w-1/2  h-4 m-2 rounded-lg bg-gray-300"></h3>
          <p className="w-1/2 h-4 m-2 rounded-lg bg-gray-300"></p>
          <div className="shimmer-res-desc-details flex justify-between p-2 ">
            <div className="shimmer-res-rating  rounded-md h-4 w-16 bg-gray-300"> </div>
            <div className="shimmer-res-time  rounded-md h-4 w-12 bg-gray-300"></div>
            <div className="shimmer-res-availability  rounded-md h-4 w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>
  );
};
export default Shimmer_restaurant_cards;
