require('dotenv').config();  // Load environment variables from a .env file
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const OpenAI = require('openai');  // Import the OpenAI library
const connectToDatabase = require(path.join(__dirname, 'db'));  // Import the database connection function
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });  // Initialize OpenAI with the API key
const app = express();  // Create an Express application

// Middleware Setup
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json());  // Parse incoming JSON requests

// app.use(express.static(path.join(__dirname, '../public')));  // Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../build'))); // Serve static files from the build directory

// Function to fetch a specific message from the database
async function getMessageFromDB(collection, messageName) {
    // Find the document in the collection with the specified name
    const messageDoc = await collection.findOne({ name: messageName });
    // Return the content of the message or null if not found
    return messageDoc?.content || null;
}

// API route for handling chat requests
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;  // Extract the user's message from the request body

    try {
        // Connect to MongoDB and get the 'resume' collection
        const db = await connectToDatabase();
        const resumeCollection = db.collection('resume');

        // Fetch the Kyra instructions message from the database
        const kyraInstructions = await getMessageFromDB(resumeCollection, 'kyra_instructions');

        // If the instructions are not found, return an error
        if (!kyraInstructions) {
            return res.status(500).json({ error: 'Kyra instructions could not be found in the database.' });
        }

        // Create the messages array for the OpenAI API call
        const openaiMessages = [
            { role: 'system', content: kyraInstructions },  // System message with instructions
            { role: 'user', content: message },  // User message
        ];

        // Call the OpenAI API to generate a response
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",  // Model ID (ensure it's correct)
            messages: openaiMessages,  // Messages array for the API
            temperature: 0.9,  // Temperature setting for response randomness
            top_p: 0.3,        // Top-p setting for response diversity
        });

        // Send the generated response back to the frontend
        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        // Handle errors during the API call or database access
        console.error('Error processing chat request:', error);
        res.status(500).json({ error: 'Failed to process chat request. Please try again later.' });
    }
});

// Catch-all handler for serving the frontend
app.get('*', (req, res) => {
    // Serve the main index.html file for all other routes
    // res.sendFile(path.join(__dirname, '../public', 'index.html'));
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
