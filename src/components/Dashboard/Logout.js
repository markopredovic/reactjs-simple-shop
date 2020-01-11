import React, { useContext } from "react";
import AppContext from "../../context/appContext";

const Logout = () => {
  const context = useContext(AppContext);

  const handleLogout = () => {
    context.logout();
  };

  return (
    <div className="l-logout">
      <h3 className="mb-5">Logout</h3>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
