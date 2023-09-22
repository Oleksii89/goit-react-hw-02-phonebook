import { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    console.log(evt.target.value);
    console.log(evt.target.name);

    this.setState({ name: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    // this.props.onSubmit({ ...this.state });
    console.log(this.state);
    this.reset();
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
              required
              value={this.state.name}
              onChange={this.handleChange}
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
