import React from "react";
import MinicartItem from "./MinicartItem";
import { useEffect } from "react";
import AppContext from "../../context/appContext";
import { useContext } from "react";
import MinicartTotal from "./MinicartTotal";

const Minicart = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    context.getCart();
    console.log("minicart use effect");
    console.log("CART", context.cart);
  }, []);

  return (
    <div className="l-minicart">
      {context.cart &&
        context.cart.map(product => (
          <MinicartItem key={product.id} {...product} />
        ))}
      {context.cart && context.cart.length === 0 && (
        <p className="empty-cart">Empty Cart</p>
      )}
      {context.cart && context.cart.length > 0 && (
        <div className="l-total">
          <MinicartTotal />
        </div>
      )}
    </div>
  );
};

export default Minicart;
