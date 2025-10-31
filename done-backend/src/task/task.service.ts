import { Injectable } from '@nestjs/common';
import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(data: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: data.title,
      description: data.description || '',
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: number): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    } else {
      throw new Error('Task not found');
    }
  }

  updateTask(id: number, data: UpdateTaskDto): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...data };
    } else {
      throw new Error('Task not found');
    }
  }
}
