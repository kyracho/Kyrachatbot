import React, { useState, useRef, useEffect } from 'react';

function ChatBot() {
    // State to manage the list of messages
    const [messages, setMessages] = useState([]);

    // State to manage the user input
    const [userInput, setUserInput] = useState('');

    // State to track any errors that occur during message sending
    const [error, setError] = useState(null);

    // State to track if the bot is currently "typing"
    const [isTyping, setIsTyping] = useState(false);

    // Ref to keep track of the end of the messages list for auto-scrolling
    const messagesEndRef = useRef(null);

    // Function to automatically scroll to the bottom of the messages
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Effect to scroll to the bottom whenever messages change or the bot is typing
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Function to handle sending a message
    const handleSendMessage = async () => {
        if (!userInput.trim()) return;  // Ignore empty or whitespace-only input

        // Add the user's message to the chat
        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput('');  // Clear the input field

        setIsTyping(true);  // Show typing indicator

        try {
            // Send the user's message to the backend API
            // const response = await fetch('http://localhost:5000/api/chat', {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch');  // Handle fetch errors
            }

            const data = await response.json();

            setIsTyping(false);  // Hide typing indicator

            // Fallback message if no relevant response is found
            const botResponse = data.response || "I'm sorry, but I can't assist with that.";

            // Add the bot's response to the chat
            setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
            setError(null);  // Clear any previous errors
        } catch (error) {
            console.error('Error:', error);
            setIsTyping(false);  // Hide typing indicator if there's an error
            setError('Failed to send message. Please try again.');  // Display error message
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {/* Render each message in the chat */}
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}

                {/* Show typing indicator when bot is typing */}
                {isTyping && (
                    <div className="message bot">
                        <div className="typing-indicator">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )}

                {/* Dummy div to track the end of messages for scrolling */}
                <div ref={messagesEndRef} />
            </div>

            {/* Display any error message */}
            {error && <div className="error">{error}</div>}

            {/* Input area for user message and send button */}
            <div className="input-area">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Hi, Tell me something about yourself."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatBot;
