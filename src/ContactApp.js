import React from "react";
import { getData } from "./data";
import { ContactList } from "./ContactList";

export const ContactApp = () => {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};
