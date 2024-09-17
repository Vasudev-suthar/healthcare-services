# Node.js healthcare service API Project

## Description
This is a Node.js backend API built using Express and MongoDB. The project includes service-related routes such as adding, retrieving, deleteing and updating services with validation rules applied using `express-validator`.

## Prerequisites
- Node.js (v14.x or higher)
- MongoDB (local instance or MongoDB Atlas)
- Postman (optional for testing)

## Setup Instructions

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install all dependencies:
    ```bash
    npm install
    ```

3. Set up your MongoDB connection:
   - Create a `.env` file in the root of your project and add the following environment variables:
     ```plaintext
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>
     PORT=6000
     ```

4. Run the project:
    ```bash
    npm start
    npm run dev  -- for development
    ```

5. The server should be running at `http://localhost:5000`.

## API Endpoints

- **POST** `/api/v1/addservice`: Adds a new service.
- **GET** `/api/v1/getservice`: Retrieves all services.
- **PUT** `/api/v1/updateservice/:serviceId`: Updates an existing service.
- **Delete** `/api/v1/deleteservice/:serviceId`: Delete an existing service.
