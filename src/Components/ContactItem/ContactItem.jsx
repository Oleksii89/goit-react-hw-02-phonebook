export const ContactIem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ name, number, id }) => (
    <li key={id}>
      {name} : {number}
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
};
