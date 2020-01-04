import React from "react";
import AppContext from "../../context/appContext";
import useCategory from "../../hooks/useCategory";
import CategoriesList from "./CategoriesList";
import AddCategoryForm from "./AddCategoryForm";

const CategoryPage = () => {
  const { categories, list, add, remove, update } = useCategory();

  return (
    <div className="l-category">
      <div className="l-container">
        <AppContext.Provider value={{ categories, list, add, remove, update }}>
          <AddCategoryForm />
          <CategoriesList />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default CategoryPage;
