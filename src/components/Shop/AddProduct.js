import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import { useEffect } from "react";

const AddProduct = ({ product }) => {
  const context = useContext(AppContext);

  const handleAddToCart = () => {
    product.qty = 1;
    context.addToCart(product);
  };

  useEffect(() => {}, []);

  return (
    <div className="l-add-product">
      <div className="m-add-product text-center">
        <div className="l-img">
          {product && product.productImageUrl ? (
            <img src={product.productImageUrl} alt="" />
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
          <div className="l-name h5">{product && product.name}</div>
          <div className="l-price text-info h4">{`${product &&
            product.price}$`}</div>
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
