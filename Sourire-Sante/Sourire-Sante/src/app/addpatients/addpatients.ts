import { Component, EventEmitter } from '@angular/core';
import { Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addpatients',
  imports: [],
  templateUrl: './addpatients.html',
  styleUrl: './addpatients.css',
})
export class Addpatients {
  @Input() patientDate:any;
@Output() onconfirm = new EventEmitter<void>();
confirmsave(){
  this.onconfirm.emit();
}
}
