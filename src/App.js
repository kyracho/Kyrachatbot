import React from 'react';
import './App.css';  // Importing the main CSS file for styling
import ChatBot from './components/chatbot';  // Importing the ChatBot component

function App() {
  // console.log('App component is rendering');  // Log to indicate when the App component is rendering

  return (
    <div className="App">
      {/* The main container for the ChatBot component */}
      <div className="chatbot-container">
        <ChatBot />  {/* Render the ChatBot component */}
      </div>
    </div>
  );
}

export default App;  // Export the App component as the default export
