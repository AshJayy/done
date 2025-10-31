import { Task } from "@/app/lib/models/task";

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
    }
}