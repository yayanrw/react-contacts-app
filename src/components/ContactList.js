import React from "react";
import { ContactItem } from "./ContactItem";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact}
        />
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
