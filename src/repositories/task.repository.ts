import * as mongo from 'mongodb';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDb } from 'nest-mongodb';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { Task } from 'src/interfaces/task.interface';

@Injectable()
export class TaskRepository {
  private readonly collection: mongo.Collection;

  constructor(@InjectDb() private readonly db: mongo.Db) {
    this.collection = this.db.collection('tasks');
  }

  async getAll(): Promise<Task[]> {
    try {
      const result = await this.collection.find({}).toArray();
      return result as Task[];
    } catch (e) {
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async create(task: CreateTaskDTO): Promise<Task> {
    try {
      let createTask = { ...task, creationDate: new Date() };
      const result = await this.collection.insertOne(createTask);
      console.log('resss', result);
      if (!result.acknowledged) {
        throw new HttpException(
          'Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      let newTask = { _id: result.insertedId, ...createTask };

      return newTask;
    } catch (e) {
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
