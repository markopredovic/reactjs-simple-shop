import React from "react";
import AppContext from "../../context/appContext";
import ShopList from "../Shop/ShopList";
import useShop from "../../hooks/useShop";

const Homepage = () => {
  const { products, cart, getProductsList } = useShop();
  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        getProductsList
      }}
    >
      <div className="l-home l-page">
        <div className="l-container">
          <ShopList />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Homepage;
