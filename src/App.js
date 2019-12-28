import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./components/Category";
import Layout from "./components/UI/Layout";
import Homepage from "./components/Homepage";
import Products from "./components/Product";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
