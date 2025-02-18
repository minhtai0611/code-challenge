# Express CRUD Server

A simple CRUD backend server built with ExpressJS and TypeScript.

## Setup

1. Clone the repository.
2. Install dependencies:
   npm install (or npm i)
3. Start the server in the development mode
   npm run dev
4. Build and start the server in the production mode
   npm run build
   npm start
5. Implement API endpoints
   POST /api/resources: Create a resource.
   GET /api/resources: List all resources.
   GET /api/resources/:id : Get details of a resource.
   PUT /api/resources/:id : Update a resource.
   DELETE /api/resources/:id : Delete a resource.
6. Test API requests (initialize Bash environment)
   Create a resource:
   curl -X POST http://localhost:3000/api/resources \
    -H "Content-Type: application/json" \
    -d '{"name": "Resource 1", "description": "This is a resource being generated"}'
   List all resources:
   curl http://localhost:3000/api/resources
   Get a resource by ID:
   curl http://localhost:3000/api/resources/1
   Update a resource:
   curl -X PUT http://localhost:3000/api/resources/1 \
    -H "Content-Type: application/json" \
    -d '{"name": "Updated Resource", "description": "This resource has been updated"}'
   Delete a resource:
   curl -X DELETE http://localhost:3000/api/resources/1
