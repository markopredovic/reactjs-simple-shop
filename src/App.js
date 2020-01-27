import React from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryPage from "./components/Category/CategoryPage";
import Layout from "./components/UI/Layout";
import Homepage from "./components/Homepage";
import ProductPage from "./components/Product/ProductPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/dashboard/categories" component={CategoryPage} />
          <Route path="/dashboard/products" component={ProductPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
