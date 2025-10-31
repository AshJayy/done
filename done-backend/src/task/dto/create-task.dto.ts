import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateTaskDtoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
});

export class CreateTaskDto extends createZodDto(CreateTaskDtoSchema) {}
