import React from "react";

export const Friend = ({ id, name, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <button type="buton" className="close" onClick={onDelete(id)}>
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};
