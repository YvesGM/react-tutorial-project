/**
 * Application entry point.
 *
 * Initializes the React application and mounts the root component (`App`)
 * to the DOM element with the id "root".
 *
 * This file is responsible for:
 * - importing global styles
 * - creating the React root container
 * - rendering the main application component
 *
 * @module index
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

import './styles/Index.css';

/**
 * Root DOM container where the React application will be mounted.
 *
 * @type {HTMLElement | null}
 */
const container = document.getElementById("root");

/**
 * React root instance used to render the application.
 *
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(container);

/**
 * Render the main application component inside React StrictMode.
 *
 * StrictMode helps identify potential problems in an application
 * during development by activating additional checks and warnings.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);