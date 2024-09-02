### Kyrachatbot

Hi there! Glad you made it here. Here are the key components of the project:

1. Frontend (React):
    * Develop the user interface where potential employers can interact with the Kyra Chatbot. This interface will allow users to type in questions and receive responses from the chatbot.
    * The user interface will resemble the iMessage interface for its simplicity and ease of use.
2. Backend (Node.js/Express/MongoDB Atlas):
    * Use Node.js with Express to handle API requests, manage sessions, and interact with the GPT-4 model and MongoDB Atlas. The backend will be responsible for processing user inputs, querying the MongoDB database, and returning the responses to the frontend. Storing the chatbot's settings in MongoDB simplifies post-deployment adjustments. 
3. GPT-4o Integration:
    * Integrate GPT-4o to power the chatbot's natural language processing and response generation. Use the GPT-4o API to generate responses based on the questions asked by potential employers.
4. API Gateway (Node.js):
    * Implement an API gateway in Node.js to manage the integration of MongoDB components with the chatbot's backend. The gateway can route requests to the appropriate service, depending on the query's complexity or the need for specific processing.
5. Deployment:
    * Host the chatbot on AWS, ensuring that all components are properly integrated.
