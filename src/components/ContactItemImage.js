import React from "react";
import PropTypes from "prop-types";

export const ContactItemImage = ({ imageUrl }) => {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="Contact Avatar" />
    </div>
  );
};

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
