import { Component, Input } from '@angular/core';
import { IProject } from 'src/typings/types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent  {
  @Input() projects: IProject[] = []; 

}
