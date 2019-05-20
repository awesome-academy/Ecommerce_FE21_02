import React from "react";

const Spinner = ({ isDisplay }) => {
  debugger;
  if (isDisplay) {
    return (
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;
