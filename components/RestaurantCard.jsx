import React from "react";

export const RestaurantCard = (props) => {
  const { name, cuisine, costForTwo, rating, imageId, eta } = props;
  return (
    <div className="restaurant-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508/${imageId}`}
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
