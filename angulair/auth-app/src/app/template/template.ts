import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  imports: [FormsModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
user={name:'',email:'',age:0};
onSubmit(form:NgForm){
  console.log(form.value);
  console.log(this.user.email);
  console.log(this.user.name);
  alert("form envoyé"+" "+this.user.age);
}
}
