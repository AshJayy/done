import { Task } from '../entity/task.entity';

export const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Sample Task 1',
    description: 'This is a sample task',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Sample Task 2',
    description: 'This is another sample task',
    isCompleted: true,
  },
];