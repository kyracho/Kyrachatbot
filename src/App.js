import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from './components/chatbot';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello world 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Add the ChatBot component here */}
      <div className="chatbot-container">
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
