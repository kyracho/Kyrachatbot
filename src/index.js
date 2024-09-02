import React from 'react';  // Importing React to use JSX and other React features
import ReactDOM from 'react-dom/client';  // Importing ReactDOM for rendering the React component tree to the DOM
import './index.css';  // Importing the main CSS file for global styling
import App from './App';  // Importing the root App component
// import reportWebVitals from './reportWebVitals';  // Importing a function to measure app performance

// Creating a root DOM node where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within React's StrictMode, which helps highlight potential issues
root.render(
  <React.StrictMode>
    <App />  {/* The main App component that contains the entire application */}
  </React.StrictMode>
);

// Measuring performance in the app
// reportWebVitals is used to capture and log performance metrics
// You can pass a function to log results (e.g., console.log) or send data to an analytics endpoint
// reportWebVitals();
