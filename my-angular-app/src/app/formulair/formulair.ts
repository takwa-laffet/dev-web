import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-formulair',
  imports: [FormsModule],
  templateUrl: './formulair.html',
  styleUrl: './formulair.css',
})
export class Formulair {
  /* user={
    name:'',
    email:'',
    message:'',
    phone:''
  } */
  name:string='';
  email:string='';
  message:string=''
  phone:string='';
  contact(form:NgForm){
    console.log(form.value);
  }
}
