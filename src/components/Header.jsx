import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [authState, setAuthState] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.clipartmax.com/png/small/111-1118804_android-food-delivery-apps.png"
          alt="Android Food Delivery Apps @clipartmax.com"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {/* Always use Link component for routing instead of anchor tag */}
            {/* Link doesn't refresh the page hence it is more performant while using <a> anchor tags with href will result in page getting refreshed and hence less performant */}
            {/* Internally Link uses anchor tag */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() =>
                authState === "Login"
                  ? setAuthState("Logout")
                  : setAuthState("Login")
              }
            >
              {authState}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
