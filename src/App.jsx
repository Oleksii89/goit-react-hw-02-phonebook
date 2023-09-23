import ContactForm from 'Components/ContactForm/ContactForm';
import { Component } from 'react';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  getContact = data => {
    console.log(data.name);
    this.setState({ contacts: [], name: data.name, number: data.number });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.getContact} />
        <div>
          <h2>Contacts</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
