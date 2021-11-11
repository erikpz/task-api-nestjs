import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongoModule } from 'nest-mongodb';
import { TaskRepository } from 'src/repositories/task.repository';

@Module({
  providers: [TasksService, TaskRepository],
  controllers: [TasksController],
})
export class TasksModule {}
