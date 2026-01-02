import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mon-composant',
  standalone: true, // Standard in v21
  imports: [FormsModule], 
  template: `
    <h2>Todo list</h2>
    <input [(ngModel)]="task" placeholder="add new task" required>
    <button (click)="addtask()">add</button>

    @if (tasks.length === 0) {
      <p>you dont have any task for now pls add one</p>
    }

    <ul>
      @for (t of tasks; track t; let i = $index) {
        <li>{{i}}: {{t}}</li>
      }
    </ul>
  `,
  styleUrl: './mon-composant.css',
})
export class MonComposant {
  task: string = "";
  tasks: string[] = [];

  addtask() {
    if (this.task) {
      this.tasks.push(this.task);
      this.task = "";
    }
  }
}