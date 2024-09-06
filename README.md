### Kyrachatbot

Hi there! Glad you made it here. 

In case you want to replicate this project for your use, here are its key components:

1. Frontend (React):
    * Developed the user interface where potential employers can interact with the Kyra Chatbot. This interface allows users to type in questions and receive responses from the chatbot.
    * The user interface was built to visually resemble the iMessage, because it feels the most familiar.<img width="569" alt="Screenshot 2024-09-05 at 5 07 28 PM" src="https://github.com/user-attachments/assets/ce5d526a-8dd0-4077-a501-94c3f590700c">
    * This includes a typing indicator bubble containing three color-switching dots that switch between light grey and dark grey, sequentially.
    * The chat window automatically scrolls down to the newest message.  

2. Backend (Node.js/Express/MongoDB Atlas):
    * Used Node.js with Express to handle API requests, manage sessions, and interact with the GPT-4 model and MongoDB Atlas. The backend is responsible for processing user inputs, querying the MongoDB database, and returning the responses to the frontend. Storing the chatbot's instructions in MongoDB simplifies post-deployment adjustments, which is critical.
3. GPT-4o Integration:
    * Integrated GPT-4o to power the chatbot's natural language processing and response generation. Used the GPT-4o API to generate responses based on the questions asked by potential employers.
4. API Gateway (Node.js):
    * Implemented an API gateway in Node.js to manage the integration of MongoDB components with the chatbot's backend. The gateway routes requests to the appropriate service, depending on the query's complexity or the need for specific processing.
5. Deployment:
    * Hosted the chatbot on AWS EC2, ensuring that all components are properly integrated.
