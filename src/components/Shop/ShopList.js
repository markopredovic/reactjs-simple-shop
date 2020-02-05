import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../context/appContext";
import AddProduct from "./AddProduct";
import MySpinner from "../UI/Layout/MySpinner";
import PageTitle from "../Title/PageTitle";

const ShopList = () => {
  const context = useContext(AppContext);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    setShowLoader(true);
    await context.getProductsList();
    setShowLoader(false);
  };

  return (
    <div className="l-shop-list-wrapper">
      <PageTitle title="Shop" />
      <div className="l-shop-list">
        {context &&
          context.products.map(product => (
            <AddProduct key={product.id} product={product} />
          ))}
      </div>
      {showLoader && <MySpinner />}
    </div>
  );
};

export default ShopList;
