import { Component, OnInit } from '@angular/core';
import { LocalService } from './local.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject   } from 'src/typings/types';

const DOMAIN = "http://localhost:4200/assets/data.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor(private localStore: LocalService) {

  }
  inputToDoText:string = '';
  projects: IProject[] =  [] ; 
  ngOnInit(): void {
    //before fetching data we should check if we have stored before
    //Consumer
    this.localStore.clearData()
    let isEmptyData: boolean = this.localStore.isEmptyData("project"); 
    if (isEmptyData) {
      fetch(DOMAIN)
      .then(res => res.json())
      .then((data: any) => { 
        this.projects = data.projects
        this.localStore.saveData("project", JSON.stringify(data.projects))
          
      });
    } else { 
      this.projects =  JSON.parse(`${this.localStore.getData("project")}`)
    } 
  }
  addProject () {
    let newProjects: IProject = {
      id: this.projects.length + 1,
      name: this.inputToDoText,
      tasks: []
    }
    this.inputToDoText = ''
    this.projects =  [...this.projects, newProjects]
  }
  removeProject (id: number) { 
    this.projects =   this.projects.filter((item) => item.id !== id)
  }
  addItem(newItem: string) {
   console.log(newItem)
  }
}
