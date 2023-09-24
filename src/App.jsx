// import ContactForm from 'Components/ContactForm/ContactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // this.props.getContact(this.state);
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
    const fileteredList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    this.setState({ contacts: fileteredList });
  };
  // getVisibleContact = () => {
  //   return this.state.contacts.filter(contact => {
  //     contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
  //   });
  // };

  // getContact = data => {
  //   console.log(data.name);
  //   this.setState({ contacts: [], name: data.name, number: data.number });
  //   console.log(this.state);
  // };
  render() {
    // const visibleContact = this.getVisibleContact();

    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm getContact={this.getContact} /> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
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
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilter}
            required
          />

          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
          <ul>
            {/* {this.state.contacts.filter(contact => {
              return (
                <li key={contact.id}>
                  {contact.name
                    .toLowerCase()
                    .includes(this.state.filter.toLowerCase())}
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
    );
  }
}
