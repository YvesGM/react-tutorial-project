// Context
import User from './data/user_data.jsx';

// Components

// Styles
import './styles/App.css';

const USERDATA = {
  me: {
    name: "Test-User-1",
    age: 27,
    gender: "male",
  },
  sister: {
    name: "Test-User-2",
    age: 23,
    gender: "female",
  },
  brother: {
    name: "Test-User-3",
    age: 48,
    gender: "male",
  },
  mother: {
    name: "Test-User-4",
    age: 68,
    gender: "female",
  },
  father: {
    name: "Test-User-5",
    age: 18,
    gender: "male",
  },
};

function App() {
  return (
    <div className="app_container">´
      <div className='content_container'>
        <div className="user_data_container">
          <User
            name={USERDATA.me.name}
            age={USERDATA.me.age}
            gender={USERDATA.me.gender}
          />

          <User
            name={USERDATA.sister.name}
            age={USERDATA.sister.age}
            gender={USERDATA.sister.gender}
          />

          <User
            name={USERDATA.brother.name}
            age={USERDATA.brother.age}
            gender={USERDATA.brother.gender}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
