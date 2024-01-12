import React, { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import restaurants from "../utils/data";
import Shimmer from "./Shimmer";
import { Search } from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [fileteredRestaurantsData, setFilteredRestaurantsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const restaurantsAPIData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8965641&lng=77.5398539&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).then((data) => data.json());
    setRestaurantsData(
      restaurantsAPIData.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setFilteredRestaurantsData(
      restaurantsAPIData.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  const searchClickHandler = (searchText) => {
    console.log(searchText);
    if (searchText.length == 0) {
      setFilteredRestaurantsData([...restaurantsData]);
      return;
    }
    const filteredRestautarant = restaurantsData.filter((r) => {
      return r.info.name.toLowerCase().includes(searchText);
    });
    filteredRestautarant.length === 0
      ? setFilteredRestaurantsData([...restaurantsData])
      : setFilteredRestaurantsData(filteredRestautarant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!</h1>;
  }

  if (restaurantsData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <Search searchClickHandler={searchClickHandler} />
        <button
          className="top-rated-btn"
          onClick={(e) =>
            setRestaurantsData(
              fileteredRestaurantsData.filter((r) => r.info.avgRating > 4.2)
            )
          }
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {fileteredRestaurantsData.map((restaurant) => (
          <Link
            to={`restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard
              name={restaurant.info.name}
              cuisine={restaurant.info.cuisines}
              rating={restaurant.info.avgRating}
              costForTwo={restaurant.info.costForTwo}
              imageId={restaurant.info.cloudinaryImageId}
              eta={restaurant.info.sla.deliveryTime}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
