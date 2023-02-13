import React from "react";

export const ContactItemImage = ({ imageUrl }) => {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="Contact Avatar" />
    </div>
  );
};
