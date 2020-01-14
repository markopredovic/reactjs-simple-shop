import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AppContext from "../../context/appContext";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AppContext);

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
