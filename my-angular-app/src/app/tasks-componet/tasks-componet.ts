import { Component,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1 } from '../services/service1';
@Component({
  selector: 'app-tasks-componet',
  imports: [CommonModule],
  templateUrl: './tasks-componet.html',
  styleUrl: './tasks-componet.css',
})
export class TasksComponet {
private servicetasks=inject(Service1); // make a copy of service1 
alltasks=this.servicetasks.tasks; // get all tasks from service1
addnewtask(task:string){
  this.servicetasks.addTask(task);
}
removetask(task:string){
  this.servicetasks.deletetask(task);
}
}
