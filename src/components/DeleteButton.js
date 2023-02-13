import React from "react";

export const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
};
