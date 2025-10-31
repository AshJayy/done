import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Task } from './entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { initialTasks } from './mocks/task.mock';

@Injectable()
export class InMemoryTaskRepository {
  private tasks: Task[] = [...initialTasks];
  private readonly logger = new Logger(InMemoryTaskRepository.name);

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
    console.log(`Task created with ID ${this.tasks[this.tasks.length - 1].id}`);
    return newTask;
  }

  delete(id: number): void {
    const taskId = Number(id);
    if (!Number.isInteger(taskId)) {
      throw new NotFoundException('Invalid task ID');
    }

    const idx = this.tasks.findIndex((t) => t.id === taskId);
    if (idx === -1) throw new NotFoundException('Task not found');

    this.tasks.splice(idx, 1);
  }

  update(id: number, data: UpdateTaskDto): Task {
    const taskId = Number(id);
    if (!Number.isInteger(taskId)) {
      throw new NotFoundException('Invalid task ID');
    }

    const task = this.tasks.find((t) => t.id === taskId);
    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }

    Object.assign(task, data);
    this.logger.debug(`Task ${taskId} updated`, { updatedTask: task });
    return task;
  }
}
