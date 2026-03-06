/**
 * Main application component.
 *
 * Demonstrates basic React concepts such as:
 * - component composition
 * - passing props
 * - rendering dynamic lists using Array.map()
 *
 * The application displays user information using a reusable
 * `User` component and renders additional user entries
 * from a structured dataset.
 *
 * @module App
 */

import User from './data/user_data.jsx';

import './styles/App.css';
import './styles/Fonts.css';
import './styles/layout/content.css';
import './styles/layout/user.css';

/**
 * Represents a user object used throughout the application.
 *
 * @typedef {Object} UserData
 * @property {string} name - Name of the user.
 * @property {number} age - Age of the user.
 * @property {string} gender - Gender of the user.
 */

/**
 * Static demo user dataset used to populate the UI.
 *
 * @type {{
 *   me: UserData,
 *   sister: UserData,
 *   brother: UserData,
 *   mother: UserData,
 *   father: UserData
 * }}
 */
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

/**
 * Dataset used for dynamic list rendering in Phase 3.
 *
 * Demonstrates how React components can be rendered
 * from structured arrays using `Array.map()`.
 *
 * @type {UserData[]}
 */
const userList = [
  { name: "Test-User-1", age: 27, gender: "male" },
  { name: "Test-User-2", age: 23, gender: "female" },
  { name: "Test-User-3", age: 48, gender: "male" },
  { name: "Test-User-4", age: 68, gender: "female" },
  { name: "Test-User-5", age: 18, gender: "male" },
];

/**
 * Root React component.
 *
 * Renders:
 * - Phase 2: Static component usage via props
 * - Phase 3: Dynamic component rendering using array iteration
 *
 * @returns {JSX.Element} Rendered application UI.
 */
function App() {
  return (
    <div className="app_container">
      <div className='content_container'>

        {/* Phase 2: Basic React Component Imports */}
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

        {/* Phase 3: Rendering a List of Components */}
        <div className='user_list_wrapper' >
          <h2 className='phase3_h2'>List of Users:</h2>
          <div className='user_list_container'>
            <ul>
              {userList.map((user, index) => {
                return (
                  <li className='user' key={index}>
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                    <p>Gender: {user.gender}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
