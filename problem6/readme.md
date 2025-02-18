# Overview

The scoreboard module is responsible for:

- Tracking user scores.
- Updating scores when users complete actions.
- Displaying the top 10 scores in real-time.
- Preventing unauthorized score updates.
- The backend will be implemented as a RESTful API service using ExpressJS (Node.js) and will use a database (SQLite, PostgreSQL) for data persistence. Real-time updates will be facilitated using WebSocket or Server-Sent Events (SSE).

# Functional Requirements

## Scoreboard Display:

Display the top 10 users with the highest scores.
Update the scoreboard in real-time when scores change.

## Score Update:

Allow users to increase their scores by completing actions.
Validate and authorize score update requests.

## Security:

Prevent unauthorized users from updating scores.
Use token-based authentication (JWT) to verify user identity.

## Scalability:

Handle a large number of concurrent users.
Optimize database queries for performance.

# API endpoints:

## Update User Score

    Endpoint: POST /api/scores/update
    Description: Updates the user's score when they complete an action.
    Request Body:
    {
    "userId": "123",
    "scoreIncrease": 10
    }
    Response:
    {
    "success": true,
    "message": "Score updated successfully",
    "newScore": 110
    }

## Get Top 10 Scores

    Endpoint: GET /api/scores/top
    Description: Retrieves the top 10 users with the highest scores.
    Response:
    [
    { "userId": "123", "username": "user1", "score": 200 },
    { "userId": "456", "username": "user2", "score": 150 }
    ]

## Real-Time Scoreboard Updates

    Endpoint: GET /api/scores/live
    Description: Establishes a WebSocket or SSE connection for real-time scoreboard updates.
    Response:
    {
    "event": "scoreUpdate",
    "data": [
    { "userId": "123", "username": "user1", "score": 200 },
    { "userId": "456", "username": "user2", "score": 150 }
    ]
    }

# Authorization Mechanism

    Token-Based Authentication:
    Users log in and receive a JSON Web Token (JWT).
    The JWT is included in the Authorization header of API requests.
    Example: Authorization: Bearer <JWT>

    Validation:
    Verify the JWT signature and expiration.
    Ensure the userId in the JWT matches the userId in the request.
    Rate Limiting:
    Implement rate limiting to prevent abuse.

# Real-Time Updates

    WebSocket or SSE:
    Use WebSocket or Server-Sent Events (SSE) to push scoreboard updates to clients.
    When a score is updated, broadcast the new top 10 scores to all connected clients.

    Event Flow:
    Client establishes a WebSocket/SSE connection to /api/scores/live.
    Server sends initial top 10 scores.
    Server broadcasts updates whenever scores change.

# Database Schema

## Users Table

| Column   | Type    | Description                   |
| -------- | ------- | ----------------------------- |
| userId   | STRING  | Unique user ID (primary key). |
| username | STRING  | User's display name.          |
| score    | INTEGER | User's current score.         |

# Execution Flow Diagram

# Improvement Suggestions

## Caching:

    Use Redis or another caching layer to store the top 10 scores and reduce database load.

## Leaderboard Segmentation:

    Implement leaderboards for different time periods (daily, weekly...).

## Enhanced Security:

    Use HTTPS to encrypt API traffic.
    Implement IP-based rate limiting to prevent DDoS attacks.

## Scalability:

    Use a message queue (RabbitMQ, Kafka) to handle high volumes of score updates.

## Analytics:

    Track user activity and score trends for insights.
