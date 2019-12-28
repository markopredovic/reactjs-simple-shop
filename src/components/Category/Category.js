import React from "react";
import CategoryContext from "../../context/categoryContext";
import useCategory from "../../hooks/useCategory";
import CategoriesList from "./CategoriesList";
import AddCategoryForm from "./AddCategoryForm";

const Category = () => {
  const { categories, list, add, remove, update } = useCategory();

  return (
    <div className="l-category">
      <div className="l-container">
        <CategoryContext.Provider
          value={{ categories, list, add, remove, update }}
        >
          <AddCategoryForm />
          <CategoriesList />
        </CategoryContext.Provider>
      </div>
    </div>
  );
};

export default Category;
