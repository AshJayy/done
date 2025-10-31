export interface Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}

export const mockTasks: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description for Task 1',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description for Task 2',
        isCompleted: true,
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description for Task 3',
        isCompleted: false,
    },
]