import React from "react";
import ShopList from "../Shop/ShopList";
import MySpinner from "../UI/Layout/MySpinner";
import { useContext } from "react";
import AppContext from "../../context/appContext";

const Homepage = () => {
  const context = useContext(AppContext);

  return (
    <div className="l-home l-page">
      <div className="l-container">
        <ShopList />
        {context.showLoader && <MySpinner />}
      </div>
    </div>
  );
};

export default Homepage;
