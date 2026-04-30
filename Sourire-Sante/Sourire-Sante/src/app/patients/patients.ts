import { Component, inject } from '@angular/core';
import { ServiceJson } from '../service/service-json';
import { ServiceAuth } from '../service/serviceAuth';
@Component({
  selector: 'app-patients',
  imports: [],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients {
  private serviceJson=inject(ServiceJson);
  private serviceAuth=inject(ServiceAuth);
   patients:any;
  ngOnInit(){
    this.serviceJson.getPatients().subscribe((data)=>{
      this.patients=data;
    });
  }
  logout(){
    this.serviceAuth.logout();
  }
}
