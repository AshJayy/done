import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { InMemoryTaskRepository } from './in-memory-task.repository';

@Module({
  controllers: [TaskController],
  providers: [TaskService, InMemoryTaskRepository],
})
export class TaskModule {}
