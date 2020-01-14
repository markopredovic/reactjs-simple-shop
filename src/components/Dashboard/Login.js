import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import Alert from "react-bootstrap/Alert";
import MySpinner from "../UI/Layout/MySpinner";

const Login = () => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const context = useContext(AppContext);

  const handleLogin = async e => {
    e.preventDefault();

    const credentials = {
      loginName,
      loginPassword
    };

    setShowLoader(true);
    await context.login(credentials);
    setShowLoader(false);
  };

  return (
    <div className="l-login">
      {!context.isAuthenticated ? (
        <form className="col-sm-8" onSubmit={handleLogin}>
          <div className="form-group row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="username"
                value={loginName}
                onChange={e => setLoginName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      ) : (
        <Alert variant="success">
          <Alert.Heading>You are successfully logged in!</Alert.Heading>
          <p>
            You are now allowed access to dashboard actions:{" "}
            <strong>Add/Edit/Remove category</strong> ,also{" "}
            <strong>Add/Edit/Remove product.</strong> <br />
            Go to <strong>Dashboard dropdowm menu item</strong> to access these
            functionalities.
          </p>
        </Alert>
      )}
      {showLoader && <MySpinner />}
    </div>
  );
};

export default Login;
