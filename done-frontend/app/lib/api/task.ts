import { Task } from "@/app/lib/models/task";
import { TaskDTO } from "@/app/lib/types";

// prefer a runtime-configurable URL; fall back to localhost where NestJS often runs
const BASE_URL =  'http://localhost:3001';

export const taskEndpoints = {
    async getTasks(): Promise<Task[]>{
        const res = await fetch(`${BASE_URL}/tasks`, {
            cache: 'no-store', // ensures fresh data each time
            headers: {
                'Accept': 'application/json',
            },
        });
        if (!res.ok) {
            const text = await res.text().catch(() => null);
            throw new Error(`Failed to fetch tasks (${res.status}): ${text ?? res.statusText}`);
        }
        return await res.json() as Task[];
    },

    async createTask(title: string, description: string): Promise<Task>{
        const res = await fetch(`${BASE_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        })
        if (!res.ok) {
            const text = await res.text().catch(() => null);
            throw new Error(`Failed to create task (${res.status}): ${text ?? res.statusText}`);
        }
        return await res.json() as Task;
    },

    async updateTask(task: TaskDTO): Promise<Task>{
        const res = await fetch(`${BASE_URL}/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(task),
        })
        if (!res.ok) {
            const text = await res.text().catch(() => null);
            throw new Error(`Failed to update task (${res.status}): ${text ?? res.statusText}`);
        }
        return await res.json() as Task;
    }
}