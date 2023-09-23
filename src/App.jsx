import Form from 'Components/ContactForm/ContactForm';
import { Component } from 'react';
// import { nanoid } from 'nanoid';

export default class App extends Component {
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
      <>
        <h1>Phonebook</h1>
        <Form getContact={this.getContact} />
        <div>
          <h2>Contacts</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </>
    );
  }
}
