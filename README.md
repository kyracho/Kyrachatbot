### Kyrachatbot

Hi there! Glad you made it here. 

This repository contains a full-stack application that integrates a chatbot powered by GPT-4o. The app is designed to assist potential employers by answering questions about the developer's resume, work experience, and projects. The backend is built using Node.js and Express, and the database is hosted on MongoDB Atlas. The frontend is connected to the backend through an API gateway that manages data flow between services.
___

## Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [MongoDB Atlas Setup](#mongodb-atlas-setup)
  - [API Gateway Setup](#api-gateway-setup)
- [Deployment](#deployment)
- [Usage](#usage)

---

## Tech Stack
- **Backend**: Node.js, Express, MongoDB Atlas
- **Frontend**: React 
- **Chatbot**: GPT-4o via OpenAI API
- **Database**: MongoDB Atlas
- **Hosting**: AWS EC2

---

## Features
- Natural language processing powered by GPT-4o.
- A RESTful API built using Node.js and Express.
- MongoDB Atlas for persistent storage of chatbot instructions and responses.
- Easily adjustable post-deployment through the MongoDB database.
- Integrated API Gateway to manage data flow and processing.

---

## Getting Started

Follow these steps to replicate and run the application on your local machine and deploy it to AWS EC2.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [AWS Account](https://aws.amazon.com/)
- GPT-4o API credentials (OpenAI API Key)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install the necessary packages for both the backend and frontend**:
    - Backend (Node.js/Express):
      ```bash
      cd backend
      npm install
      ```

    - Frontend (React or your preferred framework):
      ```bash
      cd frontend
      npm install
      ```

---

### Backend Setup

1. **Environment Variables**:
   Create a `.env` file in the `backend` directory with the following information:
   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/gpt-chatbot?retryWrites=true&w=majority
   OPENAI_API_KEY=your-openai-api-key
   ```

2. **Node.js Server**:
   The backend uses Express to manage API requests and MongoDB Atlas for storing and retrieving data. Make sure you have the correct MongoDB connection string, and your OpenAI API key is set in the environment variables.

3. **Running the Backend**:
   Start the Node.js server:
   ```bash
   npm start
   ```

   You should see output confirming that the backend is running on the specified port (`5000` by default).

---

### Frontend Setup

1. **Frontend Configuration**:
   Ensure the frontend (e.g., React) communicates with the backend by adjusting the API endpoint in your frontend code (likely in `src/api.js` or a similar file):
   ```js
   const API_URL = 'http://localhost:5000/api'; // For local development
   ```

2. **Running the Frontend**:
   To start the frontend locally, run:
   ```bash
   npm start
   ```

   This will open the frontend in your browser on `http://localhost:3000`.

---

### MongoDB Atlas Setup

1. **Create a MongoDB Cluster**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a new cluster.
   - Once created, add a new database named `gpt-chatbot` and a collection named `instructions`.

2. **Connecting to MongoDB Atlas**:
   - In your MongoDB Atlas cluster dashboard, create a database user with the necessary permissions.
   - Copy the connection string and replace the `<username>` and `<password>` placeholders with your MongoDB credentials.
   - Set this connection string as `MONGO_URI` in the `.env` file of your backend.

---

### API Gateway Setup

1. **Why Use an API Gateway?**
   The API Gateway in this app is used to manage communication between the GPT-4o chatbot and MongoDB Atlas. It handles routing of requests and ensures that the appropriate service is called based on the complexity of the query.

2. **API Gateway in Node.js**:
   The API gateway is configured to route incoming requests to either the GPT-4o API or MongoDB, depending on the request:
   - Simple queries (e.g., fetching predefined responses) are sent directly to MongoDB.
   - Complex queries (e.g., generating a new response from GPT-4o) are forwarded to the GPT-4o API.

3. **API Gateway Configuration**:
   Ensure the API Gateway routes are properly set up in the `backend/routes/api.js` file:
   ```js
   router.post('/gpt', async (req, res) => {
       // Call GPT-4o API here
   });

   router.get('/responses', async (req, res) => {
       // Query MongoDB Atlas for chatbot responses
   });
   ```

---

### Deployment

The app is hosted on AWS EC2. Follow these steps to deploy your application:

1. **Create an EC2 Instance**:
   - Set up an EC2 instance with Ubuntu.
   - SSH into the instance using your private key:
     ```bash
     ssh -i "your-key.pem" ubuntu@your-ec2-ip
     ```

2. **Install Node.js and Git on EC2**:
   ```bash
   sudo apt update
   sudo apt install nodejs npm git
   ```

3. **Clone the Repository**:
   Once inside the EC2 instance, clone your repository and install the dependencies:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file on the server, similar to the local setup:
   ```bash
   nano .env
   ```
   Add the environment variables (MONGO_URI, OPENAI_API_KEY, etc.).

5. **Running the Backend on EC2**:
   To ensure the backend runs in the background, use a process manager like `pm2`:
   ```bash
   npm install pm2 -g
   pm2 start server.js
   ```

6. **Frontend Deployment**:
   - You can deploy the frontend to the same EC2 instance or to a separate static hosting service (e.g., S3 or Netlify). Ensure that the frontend points to the correct backend URL (i.e., your EC2 instance IP).

---

## Usage

Once everything is set up, the chatbot should be live on the frontend. Users can ask questions about your resume, work experience, and other relevant details. The chatbot will either:
- Retrieve predefined answers from the MongoDB Atlas database, or
- Generate new responses using the GPT-4o API.

---

This README should provide a clearer path for anyone replicating your app. Let me know if you need further clarification on any step!
