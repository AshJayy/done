import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { initialTasks } from './mocks/task.mock';

@Injectable()
export class InMemoryTaskRepository {
  private tasks: Task[] = [...initialTasks];

  findAll(): Task[] {
    return this.tasks;
  }

  create(data: CreateTaskDto): Task {
    const nextId =
      this.tasks.length > 0 ? Math.max(...this.tasks.map((t) => t.id)) + 1 : 1;
    const newTask: Task = {
      id: nextId,
      title: data.title,
      description: data.description || '',
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  delete(id: number): void {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx === -1) throw new NotFoundException('Task not found');
    this.tasks.splice(idx, 1);
  }

  update(id: number, data: UpdateTaskDto): Task {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx === -1) throw new NotFoundException('Task not found');
    this.tasks[idx] = { ...this.tasks[idx], ...data };
    return this.tasks[idx];
  }
}