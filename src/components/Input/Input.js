import React from "react";
import { constData } from "../../data/const";

export const Input = ({ value, onChange, onKeyDown }) => (
  <>
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={constData.addNew}
      className="input-box"
    />
  </>
);
