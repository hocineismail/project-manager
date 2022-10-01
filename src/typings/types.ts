export interface ITask {
   id: number;
   name: string;
   status: string;
   description:  string;
   children: ITask[]
  }

 export interface IProject {
    id: number;
    name: string;
    tasks: ITask[]; 
}