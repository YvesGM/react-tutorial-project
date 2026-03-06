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