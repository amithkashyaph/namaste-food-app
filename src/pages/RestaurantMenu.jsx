import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  //   const [restaurantInfo, setRestaurantInfo] = useState(null);
  //   const [menuData, setMenuData] = useState({});

  const { id } = useParams();

  const [restaurantInfo, menuData] = useRestaurantMenu(id);

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const menuData = await fetch(MENU_API + id).then((data) => data.json());

  //     setMenuData(menuData?.data?.cards[0]?.card?.card?.info);
  //     setRestaurantInfo(menuData.data);
  //     console.log(menuData?.data?.cards[0]?.card?.card?.info);
  //   };

  if (restaurantInfo === null || menuData === null) {
    return <Shimmer />;
  }
  const { itemCards } =
    restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(restaurantInfo);

  return (
    <div className="menu">
      <h1>{menuData.name}</h1>
      <h3>{menuData.cuisines.join(", ")}</h3>
      <h4>{menuData.costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
