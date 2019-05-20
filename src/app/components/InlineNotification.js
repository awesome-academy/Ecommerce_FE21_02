import React from "react";

const InlineNotification = ({ message }) => {
  if (message !== null) {
    return (
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{message}</strong>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default InlineNotification;
