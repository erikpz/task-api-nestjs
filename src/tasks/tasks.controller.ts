import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks()
    }

    @Get(':id')
    getTask(@Param('id') id: string){
        return id
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDTO){
        return this.taskService.createTask(createTaskDto)
    }
}
