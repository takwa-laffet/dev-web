import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { PrirorityColorDirective } from './prirority.color.directive';
 @Component({
  selector: 'app-tasks',
  imports: [FormsModule, PrirorityColorDirective ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
task:string="";
//tasks: string[] = [];
  tasks: { name: string, pirority: string }[] = [];
pirority:string="";
//
  addtask() {
    if (this.task && this.pirority) {
      this.tasks.push({ name: this.task, pirority: this.pirority });
      //console.log(this.tasks)
      this.task = "";
      this.pirority = "";
    }
  }
  
}
