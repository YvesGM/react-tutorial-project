# React Tutorial

## Preview
Simple React learning project demonstrating component architecture, state management and custom hooks.

## Description
React practice project to learn fundamental React concepts such as:

- component composition
- props and reusable UI components
- dynamic list rendering
- local state management with `useState`
- custom hooks
- event handling and controlled inputs

---

## Learning Goals
- understand React component architecture
- build reusable UI components
- practice dynamic rendering with arrays
- manage state using React hooks
- separate UI and logic using custom hooks

---

## Tech Stack
- React
- ReactDOM
- JavaScript

---

## Project Structure
src/
  components/
    layout/
    ui/
      AddTaskButton.jsx
      Card.jsx
      DeleteTaskButton.jsx
      Input.jsx
      LoginButton.jsx
  data/
    TaskList.jsx
    User.jsx
  hooks/
    useTasks.js
  styles/
    layout/
      content.css
    ui/
      buttons.css
      cards.css
      inputs.css
      lists.css
      users.css
    App.css
    Fonts.css
    Index.css
  App.jsx
  index.jsx

---

## Project Setup (initial creation)
- Terminal: "npx create-react-app ."

---

## Installation
git clone <repository-url>
cd react-tutorial-project
npm install

---

## Development
npm start

---

## Development Server
Local: http://localhost:3000/

---
---

# Development Workflow

## Phase 1 — Project Setup
- initial project setup
- cleaned default React template
- implemented basic component structure
- separated layout and UI styles
- implemented simple user data structure
- prepared project folder architecture

---

## Phase 2 — Components & Props
- implemented reusable UI components
- introduced component composition using `children`
- separated UI components into dedicated folders
- implemented basic component rendering with props

---

## Phase 3 — Dynamic Rendering
- introduced dynamic rendering using JavaScript arrays
- implemented list rendering with `Array.map()`
- created a user list dataset for iterative rendering
- added `key` props for React list elements
- expanded layout structure to support list-based UI sections

---

## Phase 4 — State & Conditional Rendering
- introduced reusable `Card` UI component
- implemented local state management using `useState`
- added login state toggle example
- implemented conditional rendering based on application state
- improved UI composition using reusable wrapper components

---

## Phase 5 — Custom Hooks & Task Management
- introduced custom React hook `useTasks`
- implemented dynamic task list functionality
- added controlled input component for task creation
- implemented event handling for adding new tasks
- implemented task deletion with `deleteTask`
- introduced reusable `DeleteTaskButton` component
- separated state management logic from UI components