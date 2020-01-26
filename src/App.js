import React, { useEffect } from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import CategoryPage from "./components/Category/CategoryPage";
import Layout from "./components/UI/Layout";
import Homepage from "./components/Homepage";
import Login from "./components/Dashboard/Login";
import ProductPage from "./components/Product/ProductPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/products" component={ProductPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
