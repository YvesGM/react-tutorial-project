/**
 * User display component.
 *
 * Renders basic user information such as name, age, and gender.
 * The user data is passed to the componentvia props.
 *
 * @param {import('../App.js').UserData} props - User data object.
 * @returns {JSX.Element} Rendered user information block.
 */
function User({ name, age, gender }) {
  return (
    <div className="user">
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}

export default User;