import React, { useContext, useState } from "react";
import AppContext from "../../context/appContext";
import Toast from "react-bootstrap/Toast";

const Login = () => {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const context = useContext(AppContext);

  const handleLogin = async e => {
    e.preventDefault();

    const credentials = {
      loginName,
      loginPassword
    };

    await context.login(credentials);
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
        <Toast show={true}>
          <Toast.Header className="bg-success">
            <strong className="mr-auto text-white">You are logged in!!!</strong>
          </Toast.Header>
          <Toast.Body className="bg-dark text-white">
            Use navbar menu to explore application
          </Toast.Body>
        </Toast>
      )}
    </div>
  );
};

export default Login;
