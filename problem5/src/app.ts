import express from 'express';
import { connectToDatabase } from './services/databaseService';
import resourceRoutes from './routes/resourceRoutes';
import { Database } from 'sqlite';

const app = express();

// Middleware
app.use(express.json());

// Connect to the database and set up routes
async function initializeApp() {
    const db = await connectToDatabase();

    // Routes
    app.use('/api/resources', resourceRoutes(db));

    return app;
}

export default initializeApp;