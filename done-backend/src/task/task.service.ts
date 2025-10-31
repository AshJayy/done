import { Logger, Injectable } from '@nestjs/common';
import { InMemoryTaskRepository } from './in-memory-task.repository';
import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  constructor(private readonly repo: InMemoryTaskRepository) {}

  getTasks(): Task[] {
    this.logger.debug('Getting all tasks');
    return this.repo.findAll();
  }

  createTask(data: CreateTaskDto): Task {
    const task = this.repo.create(data);
    this.logger.debug(`Created task with ID ${task.id}`);
    return task;
  }

  deleteTask(id: number): void {
    this.repo.delete(id);
  }

  updateTask(id: number, data: UpdateTaskDto): Task {
    return this.repo.update(id, data);
  }
}