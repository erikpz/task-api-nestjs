import { TaskProgess } from 'src/dto/create-task.dto';

export interface Task {
  _id: any;
  title: string;
  description: string;
  progress: TaskProgess;
  creationDate: Date;
}
