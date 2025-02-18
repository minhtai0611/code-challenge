# Express CRUD Server

A simple CRUD backend server built with ExpressJS and TypeScript.

# Setup

## Clone the repository

```sh
git clone https://github.com/minhtai0611/code-challenge
```

## Install dependencies

```sh
npm install
```

or

```sh
npm i
```

## Start the server in the development mode

```sh
npm run dev
```

## Build and start the server in the production mode

```sh
npm run build
npm start
```

## Implement API endpoints

- POST /api/resources: Create a resource.
- GET /api/resources: List all resources.
- GET /api/resources/:id : Get details of a resource.
- PUT /api/resources/:id : Update a resource.
- DELETE /api/resources/:id : Delete a resource.

## Test API requests (initialize Bash environment)

### Create a resource

```sh
curl -X POST http://localhost:3000/api/resources \
   -H "Content-Type: application/json" \
   -d '{"name": "Resource 1", "description": "This is a resource being generated"}'
```

### List all resources

```sh
curl http://localhost:3000/api/resources
```

### Get a resource by ID

```sh
curl http://localhost:3000/api/resources/1
```

### Update a resource

```sh
curl -X PUT http://localhost:3000/api/resources/1 \
   -H "Content-Type: application/json" \
   -d '{"name": "Updated Resource", "description": "This resource has been updated"}'
```

### Delete a resource

```sh
curl -X DELETE http://localhost:3000/api/resources/1
```
