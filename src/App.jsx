import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    console.log(this.state.name);

    return this.setState({ name: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    // this.props.onSubmit({ ...this.state });
    // console.log(this.state);
    // this.reset();
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <form>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
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

export default App;
