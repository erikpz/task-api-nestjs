import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum TaskProgess {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsEnum(TaskProgess)
  @IsNotEmpty()
  progress: TaskProgess;
}
