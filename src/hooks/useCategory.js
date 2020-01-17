import { useReducer } from "react";
import CategoryReducer from "../reducers/categoryReducer";
import { useEffect } from "react";
import {
  ADD_CATEGORY,
  GET_ALL_CATEGORIES,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
  HIDE_MESSAGE,
  PRODUCTS_LIST,
  COULD_REMOVE_CATEGORY
} from "../types";
import api from "../api/categoryApi";
import productApi from "../api/productApi";

// export custom category hook
const useCategory = () => {
  const initialState = {
    categories: [],
    products: [],
    showCategoryRemovedMessage: false,
    couldRemoveCategory: true
  };
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  useEffect(() => {
    // getList
    // list();
    getProductsList();
  }, []);

  const list = async () => {
    try {
      let categories = await api.getCategories();
      categories = categories ? categories : [];
      dispatch({ type: GET_ALL_CATEGORIES, payload: categories });
    } catch (err) {
      console.log("list error");
    }
  };

  const getProductsList = async () => {
    try {
      let response = await productApi.getList();
      const products = response ? response.data : [];
      console.log("USE CATEGORY - getProductsList", products);
      dispatch({ type: PRODUCTS_LIST, payload: products });
    } catch (err) {
      console.log("get products list error");
    }
  };

  const add = async category => {
    try {
      const firebaseItemName = await api.addCategory(category);
      category.db_node_name = firebaseItemName.data.name;
      dispatch({ type: ADD_CATEGORY, payload: category });
    } catch (err) {
      throw new Error("add category error");
    }
  };

  const remove = async db_node_name => {
    try {
      await api.removeCategory(db_node_name);
      dispatch({ type: REMOVE_CATEGORY, payload: db_node_name });
    } catch (err) {
      console.log("ERR", err);
    }
  };

  const update = async updatedCategory => {
    try {
      const response = await api.updateCategory(updatedCategory);
      if (response.statusText === "OK") {
        dispatch({ type: UPDATE_CATEGORY, payload: updatedCategory });
      } else {
        throw new Error("Update category error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hideCategoryRemovedMessage = () => {
    dispatch({ type: HIDE_MESSAGE });
  };

  const setCouldRemoveCategory = couldBeRemoved => {
    dispatch({ type: COULD_REMOVE_CATEGORY, payload: couldBeRemoved });
  };

  return {
    categories: state.categories,
    products: state.products,
    showCategoryRemovedMessage: state.showCategoryRemovedMessage,
    hideCategoryRemovedMessage,
    couldRemoveCategory: state.couldRemoveCategory,
    setCouldRemoveCategory,
    list,
    add,
    remove,
    update
  };
};

export default useCategory;
