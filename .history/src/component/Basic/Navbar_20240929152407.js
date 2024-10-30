import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1>My React App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <hr />
      <h2>Welcome to my React App!</h2>
      <p>This is a simple React application.</p>
      <hr />
      <p>Built with React {React.version}.</p>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <hr />
      <p>This app is using Redux for state management.</p>
      <p>Redux version: {process.env.REACT_APP_REDUX_VERSION}</p>
      <hr />
      <p>This app is using Redux Toolkit for easier and more efficient Redux development.</p>
      <p>Redux Toolkit version: {process.env.REACT_APP_REDUX_TOOLKIT
    </div>
  )
}

export default Navbar
