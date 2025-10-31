import { Injectable } from '@nestjs/common';
import { InMemoryTaskRepository } from './in-memory-task.repository';
import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly repo: InMemoryTaskRepository) {}

  getTasks(): Task[] {
    return this.repo.findAll();
  }

  createTask(data: CreateTaskDto): Task {
    return this.repo.create(data);
  }

  deleteTask(id: number): void {
    this.repo.delete(id);
  }

  updateTask(id: number, data: UpdateTaskDto): Task {
    return this.repo.update(id, data);
  }
}