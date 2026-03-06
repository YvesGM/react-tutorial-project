# React Tutorial

## Description
Small React practice project to learn component structure, props, and state handling.

## Learning Goals
- understand React component architecture
- practice reusable UI components
- learn list rendering with Array.map()
- implement local state management using useState

## Tech Stack
- React
- ReactDOM
- JavaScript

## Project Structure
src/
  client/
    pages/
  components/
    layout/
    ui/
      Card.jsx
      LoginButton.jsx
  data/
    User.jsx
  server/
  styles/
    layout/
      content.css
    ui/
      buttons.css
      cards.css
      users.css
    App.css
    Fonts.css
    Index.css
  App.jsx
  index.jsx

## Project Setup (initial creation)
- Terminal: "npx create-react-app ."

## Installation
git clone <repository-url>
cd react-tutorial-project
npm install

## Development
npm start

## Development Server
Local: http://localhost:3000/

# Work-Flow

## Phase 1
- initial project setup
- cleaned default React template
- implemented basic component structure
- separated layout and UI styles
- implemented simple user data structure
- prepared project folder architecture

## Phase 2
- implemented reusable UI components 
- introduced component composition using `children`
- separated UI components into dedicated folders
- implemented basic component rendering with props

## Phase 3
- introduced dynamic rendering of components using JavaScript arrays
- implemented list rendering with `Array.map()`
- created a user list dataset for iterative rendering
- added `key` props for React list elements
- expanded layout structure to support list-based UI sections


## Phase 4
- introduced reusable `Card` UI component
- implemented local state management using `useState`
- added login state toggle example
- implemented conditional rendering based on application state
- improved UI composition using reusable wrapper components