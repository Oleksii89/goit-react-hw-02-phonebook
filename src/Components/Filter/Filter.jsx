export const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>Find contact by name</label>
      <input type="text" value={filter} onChange={onChange}></input>
    </div>
  );
};
