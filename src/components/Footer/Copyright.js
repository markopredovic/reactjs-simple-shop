import React from "react";

const Copyright = () => {
  return (
    <div className="l-copyright">
      <div className="m-copyright text-center">
        &copy; Copyright {new Date().getFullYear()},{" "}
        <a href="https://markoni.codes">markoni.codes</a>
      </div>
    </div>
  );
};

export default Copyright;
