export class CreateTaskDTO {
    title: string;
    description:string;
    progress: TaskProgess;
}

export enum TaskProgess {
    OPEN="OPEN",
    IN_PROGRESS='IN_PROGRESS',
    DONE='DONE'
}