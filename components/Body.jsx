import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import restaurants from "../data";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines}
            rating={restaurant.info.avgRating}
            costForTwo={restaurant.info.costForTwo}
            imageId={restaurant.info.cloudinaryImageId}
            eta={restaurant.info.sla.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
