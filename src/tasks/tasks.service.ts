import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { TaskRepository } from 'src/repositories/task.repository';

@Injectable()
export class TasksService {

    constructor(private taskRepository: TaskRepository){}

    async getAllTasks(){
        return this.taskRepository.getAll()
    }

    async createTask(createTaskDto: CreateTaskDTO){
        return this.taskRepository.create(createTaskDto)
    }
}
