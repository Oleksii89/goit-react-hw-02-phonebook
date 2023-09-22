import { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ contacts: this.state.contacts.push(this.state.name) });

    // step 5
    // if (
    //   this.state.contacts.some(contact => contact.name === contactData.name)
    // ) {
    //   alert(`${contactData.name} is already in contacts`);
    // return;
    // }

    // this.setState({ contacts: [], name: '' }); // clear input
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Phonebook</h2>
          <label>
            <span>Name</span>

            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>

          {/* <label>
            <span>Number</span>

            <input
              type="text"
              name="number"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label> */}
          <button type="submit">Add contact</button>
        </form>
        <div>
          <p>Contacts</p>
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
