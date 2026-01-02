import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title:string="hi this is my first angular project";
  count:number=0;
  increment(){
    this.count=this.count+1;
  }

  decrement(){
    this.count--;
  }

}
