import React, { useState } from "react";
import AppContext from "../../context/appContext";
import useCategory from "../../hooks/useCategory";
import CategoriesList from "./CategoriesList";
import AddCategoryForm from "./AddCategoryForm";
import Alert from "react-bootstrap/Alert";

const CategoryPage = () => {
  const {
    categories,
    showCategoryRemovedMessage,
    hideCategoryRemovedMessage,
    list,
    add,
    remove,
    update
  } = useCategory();

  return (
    <div className="l-category">
      <div className="l-container">
        <AppContext.Provider
          value={{
            categories,
            showCategoryRemovedMessage,
            hideCategoryRemovedMessage,
            list,
            add,
            remove,
            update
          }}
        >
          {showCategoryRemovedMessage && (
            <Alert variant="success" onClose={() => {}} dismissible>
              <span>Category removed!</span>
            </Alert>
          )}
          <AddCategoryForm />
          <CategoriesList />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default CategoryPage;
