import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { name, cuisine, costForTwo, rating, imageId, eta } = props;
  return (
    <div className="restaurant-card">
      <img
        src={`${IMG_CDN_URL}/${imageId}`}
        alt="Swiggy food"
        className="restaurant-logo"
      />
      <h3 className="restaurant-name">{name}</h3>
      <h4 className="cuisine">{cuisine.join(", ")}</h4>
      <h4 className="rating">{rating}</h4>
      <h4 className="cost-for-two">{costForTwo}</h4>
      <h4 className="eta">Delievered in {eta} minutes</h4>
    </div>
  );
};
