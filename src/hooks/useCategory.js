import { useReducer } from "react";
import CategoryReducer from "../reducers/categoryReducer";
import { useEffect } from "react";
import {
  ADD_CATEGORY,
  GET_ALL_CATEGORIES,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY
} from "../types";
import api from "../api/categoryApi";

// export custom category hook
const useCategory = () => {
  const initialState = {
    categories: []
  };
  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  useEffect(() => {
    // getList
    // list();
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

  return {
    categories: state.categories,
    list,
    add,
    remove,
    update
  };
};

export default useCategory;
