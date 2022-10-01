import { Component, EventEmitter, Input , Output} from '@angular/core';
import { ITask } from 'src/typings/types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent   {
  @Input() tasks: ITask[] = []; 
  @Input() id: any  = '' 
  @Output() addNewTask = new EventEmitter<any>(); 
  addNewItem(value: any) {
    this.addNewTask.emit(value);
  }
}
