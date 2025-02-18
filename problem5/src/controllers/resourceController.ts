import { Request, Response } from 'express';
import { ResourceModel, Resource } from '../models/resourceModel';
import { Database } from 'sqlite';

export class ResourceController {
    private resourceModel: ResourceModel;

    constructor(db: Database) {
        this.resourceModel = new ResourceModel(db);
    }

    async createResource(req: Request, res: Response): Promise<void> {
        const resource: Resource = req.body;
        const newResource = await this.resourceModel.create(resource);
        res.status(201).json(newResource);
    }

    async listResources(req: Request, res: Response): Promise<void> {
        const resources = await this.resourceModel.findAll();
        res.status(200).json(resources);
    }

    async getResource(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id, 10);
        const resource = await this.resourceModel.findById(id);
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    }

    async updateResource(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id, 10);
        const resource: Resource = req.body;
        const updatedResource = await this.resourceModel.update(id, resource);
        if (updatedResource) {
            res.status(200).json(updatedResource);
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    }

    async deleteResource(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id, 10);
        await this.resourceModel.delete(id);
        res.status(204).send();
    }
}