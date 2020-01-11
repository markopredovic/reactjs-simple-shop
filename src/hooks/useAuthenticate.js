import { useReducer } from "react";
import { LOGIN, LOGOUT } from "../types";
import LoginReducer from "../reducers/loginReducer";
import loginApi from "../api/loginApi";

const useAuthenticate = () => {
  const initialState = {
    isAuthenticated: false
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const _setLocalStorageLogin = () => {
    window.localStorage.setItem("login", true);
  };

  const _removeLocalStorageLogin = () => {
    window.localStorage.removeItem("login");
  };

  const login = async credentials => {
    await loginApi.login(credentials);

    _setLocalStorageLogin();

    dispatch({ type: LOGIN });
  };

  const logout = () => {
    _removeLocalStorageLogin();

    dispatch({ type: LOGOUT });
  };

  return {
    isAuthenticated: state.isAuthenticated,
    login,
    logout
  };
};

export default useAuthenticate;
