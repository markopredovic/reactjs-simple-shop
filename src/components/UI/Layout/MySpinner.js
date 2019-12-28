import React from "react";
import Spinner from "react-bootstrap/Spinner";

const MySpinner = () => {
  return (
    <div className="l-spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default MySpinner;
