import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-my-componet',
  imports: [FormsModule],
  templateUrl: './my-componet.html',
  styleUrl: './my-componet.css',
})
export class MyComponet {
  username:string="";
  //user:string="takwa";
//user=signal("");
user =signal<string>('');
 f1(){
  this.user.set("takwa");
  this.user.update(c=>c+" "+"ahmed");
}
changeruser(){
  this.user.set(this.username);
}
}
