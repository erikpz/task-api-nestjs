import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { ObjectIdValidationPipe } from 'src/pipes/ObjectIdValidationPipe';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTask(@Param('id', new ObjectIdValidationPipe()) id: string) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body(ValidationPipe) createTaskDto: CreateTaskDTO) {
    return this.taskService.createTask(createTaskDto);
  }
}
