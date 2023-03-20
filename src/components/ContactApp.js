import React, { Component } from "react";
import { getContacts } from "../utils/data";
import { ContactList } from "./ContactList";
import ContactInput from "./ContactInput";

export default class ContactApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getContacts(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      console.log("name: ", name);
      console.log("tag: ", tag);
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/halal.png",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}
