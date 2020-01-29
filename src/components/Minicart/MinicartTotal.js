import React, { useContext } from "react";
import AppContext from "../../context/appContext";

const MinicartTotal = () => {
  const context = useContext(AppContext);
  const getMinicartTotal = () => {
    let _total = context.cart.reduce(
      (acc, current) => parseInt(acc + parseInt(current.price)),
      0
    );

    return _total;
  };

  let total = getMinicartTotal();

  return <div className="minicart-total">{`Total: ${total}$`}</div>;
};

export default MinicartTotal;
