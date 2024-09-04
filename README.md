### Kyrachatbot

Hi there! Glad you made it here. Here are the key components of the project:

1. Frontend (React):
    * Developed the user interface where potential employers can interact with the Kyra Chatbot. This interface allows users to type in questions and receive responses from the chatbot.
    * The user interface resembles the iMessage interface for its simplicity and ease of use.
2. Backend (Node.js/Express/MongoDB Atlas):
    * Used Node.js with Express to handle API requests, manage sessions, and interact with the GPT-4 model and MongoDB Atlas. The backend is responsible for processing user inputs, querying the MongoDB database, and returning the responses to the frontend. Storing the chatbot's instructions in MongoDB simplifies post-deployment adjustments, which is critical.
3. GPT-4o Integration:
    * Integrated GPT-4o to power the chatbot's natural language processing and response generation. Used the GPT-4o API to generate responses based on the questions asked by potential employers.
4. API Gateway (Node.js):
    * Implemented an API gateway in Node.js to manage the integration of MongoDB components with the chatbot's backend. The gateway routes requests to the appropriate service, depending on the query's complexity or the need for specific processing.
5. Deployment:
    * Hosted the chatbot on AWS EC2, ensuring that all components are properly integrated.
