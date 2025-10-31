import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateTaskDtoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  isCompleted: z.boolean().optional(),
});

export class UpdateTaskDto extends createZodDto(UpdateTaskDtoSchema) {}
