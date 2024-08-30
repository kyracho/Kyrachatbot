Chatbot app 

Planned Key Components:
1. Frontend (React or Angular):
    * Develop the user interface where potential employers can interact with the Kyra Chatbot. This interface will allow users to type in questions and receive responses from the chatbot.
2. Backend (Node.js/Express):
    * Use Node.js with Express to handle API requests, manage sessions, and interact with the GPT-4 model. The backend will be responsible for processing user inputs, querying the MySQL database, and returning responses to the frontend.
3. GPT-4 Integration:
    * Integrate GPT-4 to power the chatbot's natural language processing and response generation. You can use the GPT-4 API to generate responses based on the questions asked by potential employers.

4. API Gateway (Node.js):
    * Implement an API gateway in Node.js to manage the integration of MySQL components with the chatbot's backend. The gateway can route requests to the appropriate service, depending on the query's complexity or the need for specific processing.
5. Deployment:
    * Host the chatbot on AWS, ensuring that all components are properly integrated and can scale as needed.
