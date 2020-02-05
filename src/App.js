import React from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryPage from "./components/Category/CategoryPage";
import Layout from "./components/UI/Layout";
import Homepage from "./components/Homepage";
import ProductPage from "./components/Product/ProductPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import AppContext from "./context/appContext";
import useShop from "./hooks/useShop";

function App() {
  const {
    products,
    getProductsList,
    cart,
    getCart,
    addToCart,
    deleteMinicartItem
  } = useShop();

  return (
    <AppContext.Provider
      value={{
        products,
        getProductsList,
        cart,
        getCart,
        addToCart,
        deleteMinicartItem
      }}
    >
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/dashboard/categories" component={CategoryPage} />
            <Route path="/dashboard/products" component={ProductPage} />
            <Route path="/checkout" component={CheckoutPage} />
          </Switch>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
