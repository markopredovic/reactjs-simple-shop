import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AppContext from "../../context/appContext";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AppContext);

  useEffect(() => {
    console.log("AuthenticatedRoute isAuthenticated", context.isAuthenticated);
  });

  return (
    <Route
      {...rest}
      render={props =>
        context.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
