/**
 * User display component.
 *
 * Renders basic user information such as name, age, and gender.
 * The data is passed to the component via props.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.name - Name of the user.
 * @param {number} props.age - Age of the user.
 * @param {string} props.gender - Gender of the user.
 *
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