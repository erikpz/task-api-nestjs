import * as mongo from 'mongodb';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDb } from 'nest-mongodb';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { Task } from 'src/interfaces/task.interface';
import { ObjectId } from 'mongodb';

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
      throw new InternalServerErrorException('Server Error');
    }
  }

  async getById(id: string): Promise<Task> {
    try {
      const objId = new ObjectId(id);
      const result = await this.collection.findOne({ _id: objId });
      return { ...result } as Task;
    } catch (e) {
      throw new InternalServerErrorException('Server Error');
    }
  }

  async create(task: CreateTaskDTO): Promise<Task> {
    try {
      let createTask = { ...task, creationDate: new Date() };
      const result = await this.collection.insertOne(createTask);
      if (!result.acknowledged) {
        throw new InternalServerErrorException('Server Error');
      }
      let newTask = { _id: result.insertedId, ...createTask };

      return newTask;
    } catch (e) {
      throw new InternalServerErrorException('Server Error');
    }
  }
}
