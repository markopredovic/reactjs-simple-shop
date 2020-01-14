import { useReducer } from "react";
import { LOGIN, LOGOUT } from "../types";
import LoginReducer from "../reducers/loginReducer";
import loginApi from "../api/loginApi";

const useAuthenticate = () => {
  const initialState = {
    isAuthenticated: false
  };

  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const _setSessionStorageLogin = () => {
    window.sessionStorage.setItem("login", true);
  };

  const _removeSessionStorageLogin = () => {
    window.sessionStorage.removeItem("login");
  };

  const login = async credentials => {
    await loginApi.login(credentials);

    _setSessionStorageLogin();

    dispatch({ type: LOGIN });
  };

  const logout = async () => {
    await loginApi.logout();
    _removeSessionStorageLogin();

    dispatch({ type: LOGOUT });
  };

  return {
    isAuthenticated: state.isAuthenticated,
    login,
    logout
  };
};

export default useAuthenticate;
