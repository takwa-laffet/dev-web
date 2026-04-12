import { Component, inject } from '@angular/core';
import { DentistesService } from '../service/dentistesservice';
import { Injectable, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-dentistes',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dentistes.html',
  styleUrl: './dentistes.css',
})
export class Dentistes {
  private serviced=inject(DentistesService);
  dentisteserv=this.serviced.dentiste;
  dentistes=[
    {
      id:1,
      nom:"Dr. Amine",
      specialite:"Orthodontiste",
      experience:10,
      photo:"assets/dentistes/amine.jpg"
    },
    {
      id:2,
      nom:"Dr. Sarah",
      specialite:"Endodontiste",
      experience:8,
      photo:"assets/dentistes/sarah.jpg"
    },
    {
      id:3,
      nom:"Dr. Karim",
      specialite:"Pédodontiste",
      experience:5,
      photo:"assets/dentistes/karim.jpg"
    }
  ]
  recherche(name:string){
    for(let d of this.dentistes){
      if(d.nom.toLowerCase()==name.toLowerCase()){
        return d;
      }
    }
    return null;
  }
  voirDetails(ff:any){
   return this.serviced.voirDetails(ff);

  }
}
