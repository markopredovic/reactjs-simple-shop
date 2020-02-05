import React from "react";
import MinicartItem from "./MinicartItem";
import { useEffect } from "react";
import AppContext from "../../context/appContext";
import { useContext } from "react";
import MinicartTotal from "./MinicartTotal";
import { NavLink } from "react-router-dom";

const Minicart = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    context.getCart();
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
        <>
          <div className="l-total">
            <MinicartTotal />
          </div>
          <div className="l-action">
            <NavLink
              to="/checkout"
              className="btn btn-checkout btn-lg btn-block"
            >
              Go to checkout
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Minicart;
