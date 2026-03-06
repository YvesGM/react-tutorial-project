/**
 * Main application component.
 *
 * Demonstrates basic React concepts such as:
 * - component composition
 * - passing props to child components
 * - dynamic list rendering using `Array.map()`
 * - local state management using `useState()`
 * - conditional rendering based on application state
 *
 * The application renders user information using a reusable
 * components such as `User`, `Card`, and `LoginButton`.
 *
 * @module App
 */
import { useState } from 'react';

import User from './data/User.jsx';
import Card from './components/ui/Card.jsx';
import LoginButton from './components/ui/LoginButton.jsx';

import './styles/App.css';
import './styles/Fonts.css';
import './styles/layout/content.css';
import './styles/ui/users.css';
import './styles/ui/cards.css';
import './styles/ui/buttons.css';

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
 * Responsibilities:
 * - render static user compontents (Phase 2)
 * - render dynamic user lists (Phase 3)
 * - manage login state using `useState()` (Phase 4)
 * - conditionally render UI based on login state
 * 
 * @returns {JSX.Element} Rendered application UI.
 */
function App() {

  /** 
   * Local login state used for conditional rendering in Phase 4 
   * 
   * @type {[boolean, Function]}
  */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn2, setIsLoggedIn2] = useState(false);

  return (
    <div className="app_container">
      <div className='content_container'>

        {/* Phase 2: Basic React Component Imports */}
        <Card>
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
        </Card>

        {/* Phase 3: Rendering a List of Components */}
        <Card>
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
        </Card>

        {/* Phase 4: Conditional Rendering/local State handling */}
        <Card>
          <h2 className='login_message'>Example 1:</h2>
          {isLoggedIn ? (
            <>
              <h2 className='login_message'>Welcome back, {USERDATA.me.name}!</h2>
              <LoginButton type="button" onClick={() => setIsLoggedIn(false)}>
                Log Out
              </LoginButton>
            </>
          ) : (
            <>
              <h2 className='login_message'>Please log in</h2>
              <LoginButton type="button" onClick={() => setIsLoggedIn(true)}>
                Log In
              </LoginButton>
            </>
          )}
        </Card>

        <Card>
          <h2 className='login_message'>Example 2:</h2>
          <h2 className='login_message'>{isLoggedIn2 ? `Welcome back, ${USERDATA.sister.name}!` : 'Please log in'}</h2>
          <LoginButton type="button" onClick={() => setIsLoggedIn2(!isLoggedIn2)}>
            {isLoggedIn2 ? 'Log Out' : 'Log In'}
          </LoginButton>
        </Card>

      </div>
    </div >
  );
}

export default App;
