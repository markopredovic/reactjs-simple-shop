import {
  ADD_CATEGORY,
  GET_ALL_CATEGORIES,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
  HIDE_MESSAGE,
  PRODUCTS_LIST,
  COULD_REMOVE_CATEGORY,
  CURRENT_CATEGORY
} from "../types";

const categoryReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return getAllCategories(state, action.payload);
    case ADD_CATEGORY:
      return addCategory(state, action.payload);
    case REMOVE_CATEGORY:
      return removeCategory(state, action.payload);
    case UPDATE_CATEGORY:
      return updateCategory(state, action.payload);
    case HIDE_MESSAGE:
      return {
        ...state,
        showCategoryRemovedMessage: false
      };
    case PRODUCTS_LIST:
      return getProductsList(state, action.payload);
    case COULD_REMOVE_CATEGORY:
      return {
        ...state,
        couldRemoveCategory: action.payload
      };
    case CURRENT_CATEGORY:
      return setCurrentCategory(state, action.payload);
    default:
      return state;
  }
};

export default categoryReducer;

const getAllCategories = (state, categoriesObj) => {
  if (!categoriesObj) return [];
  const categories = Object.keys(categoriesObj).map(el => ({
    ...categoriesObj[el],
    db_node_name: el
  }));
  return {
    ...state,
    categories: [...categories]
  };
};

const getProductsList = (state, productsObj) => {
  if (!productsObj) return [];
  const products = Object.keys(productsObj).map(el => ({
    ...productsObj[el],
    db_node_name: el
  }));
  return {
    ...state,
    products: [...products]
  };
};

const addCategory = (state, category) => {
  return {
    ...state,
    categories: [...state.categories, category]
  };
};

const removeCategory = (state, db_node_name) => {
  let updatedCategories = state.categories.filter(
    category => category.db_node_name !== db_node_name
  );

  return {
    ...state,
    showCategoryRemovedMessage: true,
    categories: updatedCategories
  };
};

const updateCategory = (state, updatedCategory) => {
  const updatedCategoriesList = state.categories.map(category => {
    if (category.id === updatedCategory.id) return updatedCategory;
    else return category;
  });

  return {
    ...state,
    categories: updatedCategoriesList
  };
};

const setCurrentCategory = (state, currentCategory) => {
  if (currentCategory) {
    return {
      ...state,
      isEditCategory: true,
      currentCategory
    };
  } else {
    return {
      ...state,
      isEditCategory: false,
      currentCategory: null
    };
  }
};
