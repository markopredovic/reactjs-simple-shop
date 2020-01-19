import React, { useState } from "react";
import AppContext from "../../context/appContext";
import useCategory from "../../hooks/useCategory";
import CategoriesList from "./CategoriesList";
import AddCategoryForm from "./AddCategoryForm";
import EditCategoryForm from "./EditCategoryForm";
import Alert from "react-bootstrap/Alert";
import ModalMessage from "../UI/ModalMessage";
import CategoryRemoveMessage from "../Messages/CategoryRemoveMessage";

const CategoryPage = () => {
  const {
    categories,
    products,
    showCategoryRemovedMessage,
    hideCategoryRemovedMessage,
    couldRemoveCategory,
    setCouldRemoveCategory,
    isEditCategory,
    currentCategory,
    setCurrentCategory,
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
            products,
            showCategoryRemovedMessage,
            hideCategoryRemovedMessage,
            couldRemoveCategory,
            setCouldRemoveCategory,
            isEditCategory,
            currentCategory,
            setCurrentCategory,
            list,
            add,
            remove,
            update
          }}
        >
          {showCategoryRemovedMessage && (
            <Alert variant="danger" onClose={() => {}} dismissible>
              <CategoryRemoveMessage success={true} />
            </Alert>
          )}
          {!couldRemoveCategory && (
            <ModalMessage
              title="Remove Category"
              type="danger"
              closeModal={setCouldRemoveCategory}
            >
              <CategoryRemoveMessage success={false} />
            </ModalMessage>
          )}
          <AddCategoryForm />
          <CategoriesList />
          {isEditCategory && (
            <EditCategoryForm currentCategory={currentCategory} />
          )}
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default CategoryPage;
