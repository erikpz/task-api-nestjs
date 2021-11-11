import { Module } from '@nestjs/common';
import { MongoModule } from 'nest-mongodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    MongoModule.forRoot(
      'mongodb+srv://erikpz:erikmongodb@cluster0.bx8ym.mongodb.net',
      'taskDB'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
