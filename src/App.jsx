import Form from 'Components/Form/Form';
import { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
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
