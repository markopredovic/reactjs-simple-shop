import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import AppContext from "../../context/appContext";

const MinicartItem = ({ id, name, productImageUrl, price, qty = 0 }) => {
  const context = useContext(AppContext);

  const handleDelete = () => {
    console.log("DELETE MINICART ITEM");
    context.deleteMinicartItem(id);
  };

  return (
    <div className="l-minicart-item">
      <div className="l-img">
        <img src={productImageUrl} alt="" />
      </div>
      <div className="l-content">
        <h4>{name}</h4>
        <p>{`${price}$`}</p>
        <p>{`Qty: ${qty}`}</p>
      </div>
      <div className="l-action">
        <Button variant="danger" onClick={handleDelete}>
          <FaTimes />
        </Button>
      </div>
    </div>
  );
};

export default MinicartItem;
