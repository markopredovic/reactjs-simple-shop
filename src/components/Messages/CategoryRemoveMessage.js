import React from "react";

const CategoryRemoveMessage = ({ success }) => {
  return (
    <div className="l-category-remove-message">
      {success ? (
        <div>Category is removed!</div>
      ) : (
        <div>
          Category can't be removed because there are existing products with
          this category Id!
        </div>
      )}
    </div>
  );
};

export default CategoryRemoveMessage;
