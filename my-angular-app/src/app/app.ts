import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SIGNAL } from '@angular/core/primitives/signals';
import { NgClass ,NgStyle } from '@angular/common';
import { Lifecycle } from './lifecycle/lifecycle';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, FormsModule, NgClass, NgStyle,Lifecycle, CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
/* /*s1 angular* / userName = "Takwa";
  buttonDisabled = false; 
 usercity: string = ""; 
 count=signal(0);
 doublecount = ()=>this.count()*2;
 increment() {
  this.count.update(v=>v+1);}
  decrementation() {
    this.count.update(v=>v-1);}
 reset(){
  this.count.set(0);
 }
 imageUrl() {
    if (this.buttonDisabled) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg";
    } else {
      return "https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg";
    }
  }

  showAlert() {
    alert("hiii");
  }
clicker(){
  console.log(this.userName);
} */
/* s2 angular */
/* showlist=signal(true);
tasks=signal([
  {id:1, name:"feat:add button", completed:false},
  {id:2, name:"fixer: bug in login", completed:true},
  {id:3, name:"feat: add page login", completed:false}
]);
clear(){
  this.tasks.set([]);
} */
/* isadmin=signal(true);
 */
mynumber=0;
isvisible=signal(true);
isadmin=signal(false);
increment(){
  this.mynumber++;
}
toggle(){
  this.isvisible.update(v=>!v);
}
currentProgress=signal(61);
  protected readonly title = signal('my-angular-app');
}
