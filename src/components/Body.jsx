import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import restaurants from "../utils/data";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <button
          className="top-rated-btn"
          onClick={(e) => console.log("Button clicked : ", e)}
        >
          Top rated Restaurants
        </button>
      </div>
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
