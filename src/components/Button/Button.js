import React from "react";

export const Button = ({ onClick, disabled, children, classname }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={classname}
  >
    {children}
  </button>
);
