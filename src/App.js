import React, { useEffect } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import CategoryPage from "./components/Category/CategoryPage";
import Layout from "./components/UI/Layout";
import Homepage from "./components/Homepage";
import Login from "./components/Dashboard/Login";
import Logout from "./components/Dashboard/Logout";
import ProductPage from "./components/Product/ProductPage";
import AppContext from "./context/appContext";
import useAuthenticate from "./hooks/useAuthenticate";

function App() {
  let { isAuthenticated, login, logout } = useAuthenticate();

  isAuthenticated = !!window.localStorage.getItem("login");

  useEffect(() => {
    return () => {
      window.localStorage.removeItem("login");
    };
  }, []);

  return (
    <AppContext.Provider value={{ isAuthenticated, login, logout }}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={Login} />
            <AuthenticatedRoute path="/logout" component={Logout} />
            <AuthenticatedRoute path="/categories" component={CategoryPage} />
            <AuthenticatedRoute path="/products" component={ProductPage} />
          </Switch>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
