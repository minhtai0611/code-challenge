import { Database } from 'sqlite';

export interface Resource {
    id?: number;
    name: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export class ResourceModel {
    constructor(private db: Database) {}

    async create(resource: Resource): Promise<Resource> {
        const { name, description } = resource;
        const result = await this.db.run(
            'INSERT INTO resources (name, description) VALUES (?, ?)',
            name,
            description
        );
        return { id: result.lastID, ...resource };
    }

    async findAll(): Promise<Resource[]> {
        return this.db.all('SELECT * FROM resources');
    }

    async findById(id: number): Promise<Resource | undefined> {
        return this.db.get('SELECT * FROM resources WHERE id = ?', id);
    }

    async update(id: number, resource: Resource): Promise<Resource | undefined> {
        const { name, description } = resource;
        await this.db.run(
            'UPDATE resources SET name = ?, description = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
            name,
            description,
            id
        );
        return this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.db.run('DELETE FROM resources WHERE id = ?', id);
    }
}