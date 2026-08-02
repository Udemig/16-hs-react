import RestaurantDetail from "./RestaurantDetail";
import RestaurantProducts from "./RestaurantProducts";

const Restaurant = () => {
  return (
    <div className="container space-y-6">
      <div className="box p-6">
        <RestaurantDetail />
      </div>

      <div className="box p-6">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default Restaurant;
