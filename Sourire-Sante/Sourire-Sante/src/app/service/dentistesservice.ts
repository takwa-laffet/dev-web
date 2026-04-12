import { Injectable, signal } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DentistesService {
   private r=signal<any[]>([{
        id:0,
        nom:"",
        specialite:"",
        experience:0,
        photo:""
    }]);
private dentistes=signal<any[]>([
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
  ])
  readonly dentiste=this.dentistes.asReadonly();
  voirDetails(id:number){
    return this.dentistes().find(d=>d.id==id);
  }
  removeDentiste(dentiste:any){
this.dentistes.update(dentistes=>
    dentistes.filter(d=>d!==dentiste)) // recherche les dentises cest pas le meme id dde cest dentstes
}
recherche(dentiste:any){
this.r.update(r=>this.dentistes().filter(d=>d==dentiste))
 // recherche les dentises cest pas le meme id dde cest dentstes
}

}