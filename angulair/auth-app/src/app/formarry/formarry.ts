import { Component, inject } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formarry',
  imports: [ReactiveFormsModule],
  templateUrl: './formarry.html',
  styleUrl: './formarry.css',
})
export class Formarry {
  private fb=inject(FormBuilder);
form=this.fb.group({
  items:this.fb.array([])
});
get items(): FormArray{
  return this.form.get('items') as FormArray;}
addItem(){
  this.items.push(this.fb.control(''));
}
removeItem(index:number){
  this.items.removeAt(index);
  console.log(this.form.value);
}
onSubmit(){
  alert(this.form.value.items);
  console.log(this.form.value);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

}
