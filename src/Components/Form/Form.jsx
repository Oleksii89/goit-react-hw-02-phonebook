import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' }); // clear input
  };
  // step 5
  // if (
  //   this.state.contacts.some(contact => contact.name === contactData.name)
  // ) {
  //   alert(`${contactData.name} is already in contacts`);
  // return;
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <span>Name</span>

          <input
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          <span>Name</span>

          <input
            type="number"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
