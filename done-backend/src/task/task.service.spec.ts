import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { InMemoryTaskRepository } from './in-memory-task.repository';
import { CreateTaskDto } from './dto/create-task.dto';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, InMemoryTaskRepository],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  // Test case: check if the service is defined
  it('should create a task', () => {
    const dtoObject = {
      title: 'Test Task',
      description: 'Testing',
    };

    const task = service.createTask(dtoObject as unknown as CreateTaskDto);

    expect(task).toHaveProperty('id');
    expect(task.title).toBe(dtoObject.title);
    expect(service.getTasks().length).toBe(3);
  });
});
