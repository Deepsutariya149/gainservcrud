import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";

export const List = ({ list, onChangeBox }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id} className="list-view">
        <Checkbox
          onClick={() => onChangeBox(item)}
          defaultChecked={item.done}
        />{" "}
        {item.name}
      </li>
    ))}
  </ul>
);
