import express from 'express';
import { Database } from 'sqlite';
import { ResourceController } from '../controllers/resourceController';

export default function resourceRoutes(db: Database) {
    const router = express.Router();
    const resourceController = new ResourceController(db);

    router.post('/', resourceController.createResource.bind(resourceController));
    router.get('/', resourceController.listResources.bind(resourceController));
    router.get('/:id', resourceController.getResource.bind(resourceController));
    router.put('/:id', resourceController.updateResource.bind(resourceController));
    router.delete('/:id', resourceController.deleteResource.bind(resourceController));

    return router;
}