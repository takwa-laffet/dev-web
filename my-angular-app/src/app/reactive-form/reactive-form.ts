import { Component, inject } from '@angular/core';
import { FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
private reactive=inject(FormBuilder); // form builder 
loginForm=this.reactive.group({
  email: ['',[Validators.required,Validators.email]],
  password: ['',[Validators.required,Validators.minLength(6)]],
});
onSubmit(){
  console.log(this.loginForm.value);
} 
}
