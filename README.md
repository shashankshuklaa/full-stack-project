# full-stack-project
# Scalable Web App with Authentication & Dashboard

## Overview
This project is a full-stack web application built with React and Node.js/Express, implementing JWT-based authentication and a protected dashboard with CRUD operations.

## Tech Stack
Frontend:
- React.js
- React Router
- Axios

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt password hashing

## Features Implemented

Authentication:
- User registration
- User login
- JWT token-based authentication
- Protected routes
- Logout functionality

Dashboard:
- Display logged-in user profile
- Create task
- View tasks
- Update task
- Delete task
- Search/filter tasks

Security:
- Password hashing using bcrypt
- JWT authentication middleware
- Route protection
- Error handling

## API Endpoints

Auth:
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile

Tasks:
POST /api/tasks
GET /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

## How to Run

Backend:
1. cd backend
2. npm install
3. Create .env file:
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
4. npm run dev

Frontend:
1. cd frontend
2. npm install
3. npm run dev

## Scalability Approach (Production Considerations)

- Separate frontend & backend deployment (Vercel + Render)
- Environment-based configuration management
- Use refresh tokens for long sessions
- Rate limiting & API throttling
- Centralized error handling middleware
- Role-based access control
- Pagination for large datasets
- CI/CD pipeline integration
- Docker containerization for scalability
