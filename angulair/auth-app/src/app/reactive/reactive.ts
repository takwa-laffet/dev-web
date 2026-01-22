import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css',
})
export class Reactive {
  private fb= inject(FormBuilder);
  

  test = this.fb.group({
    first_name:['',Validators.required],
    last_name:['',[Validators.required , Validators.minLength(3)]],
    address: this.fb.group({
      city:[''],
      postal_code:['']
    })
  });

  onSubmit(){
    
    //alert("ok"+" "+this.test.value.first_name+" "+this.test.value.last_name);
    //alert(this.test.status);
    alert(this.test.valid);
  }
  patch(){
    this.test.patchValue({
      first_name:"John",
      last_name:"ben foulan"
    })
  }
  reset(){
    this.test.reset();
  }
}