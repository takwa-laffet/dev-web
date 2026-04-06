import { Injectable, signal } from "@angular/core";
@Injectable({
    providedIn:'root' // level of service root means it will be available throughout the application
})
export class Service1{
    private tasksignal=signal<string[]>(['task0','task1','task2']);


readonly tasks=this.tasksignal.asReadonly();
addTask(task:string){
    this.tasksignal.update(tasks=>[...tasks,task]);
}
deletetask(task:string){
    this.tasksignal.update(tasks=>tasks.filter(t=>t!==task));

}
}
