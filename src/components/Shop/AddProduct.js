import React from "react";

const AddProduct = ({ id, db_node_name, name, productImageUrl, price }) => {
  const handleAddToCart = () => {};

  return (
    <div className="l-add-product">
      <div className="m-add-product text-center">
        <div className="l-img">
          {productImageUrl ? (
            <img src={productImageUrl} alt="" />
          ) : (
            <img
              src={`https://placehold.it/150x200/?text=${encodeURIComponent(
                "no image"
              )}`}
              alt=""
            />
          )}
        </div>
        <div className="l-content">
          <div className="l-name h5">{name}</div>
          <div className="l-price text-info h4">{`${price}$`}</div>
        </div>
        <div className="l-action">
          <button onClick={handleAddToCart} className="btn btn-primary btn-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
