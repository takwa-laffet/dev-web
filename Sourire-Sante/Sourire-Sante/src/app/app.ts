import { Component, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Addpatients } from './addpatients/addpatients';
import { FormsModule } from '@angular/forms';
import { ServiceJson } from './service/service-json';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Addpatients,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
private service=inject(ServiceJson);
patient={
  name:"",
  case:"",
  age:0,
dernierrendezvous:"",
}
save(){
  if(!this.patient.name){
    return alert("name is required");
  }
  this.service.addPatient(this.patient).subscribe({
    next:(res)=>{
      alert("patient added successfully");
      this.patient={
  name:"",
  case:"",
  age:0,
dernierrendezvous:"",
      }
    }

  })
}
  protected readonly title = signal('Sourire-Sante');
}
