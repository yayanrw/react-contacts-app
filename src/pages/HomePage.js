import React, { Component } from "react";
import { deleteContact, getContacts } from "../utils/data";
import { ContactList } from "../components/ContactList";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteContact(id);

    this.setState(() => {
      return {
        contacts: getContacts(),
      };
    });
  }

  render() {
    return (
      <section>
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default HomePage;
