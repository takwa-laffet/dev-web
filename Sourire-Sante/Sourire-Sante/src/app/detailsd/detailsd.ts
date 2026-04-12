import { Component, inject } from '@angular/core';
import { DentistesService } from '../service/dentistesservice';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailsd',
  imports: [],
  templateUrl: './detailsd.html',
  styleUrl: './detailsd.css',
})
export class Detailsd {
  private servedentis=inject(DentistesService);
  dentisteserv=this.servedentis.dentiste;
  private route=inject(ActivatedRoute);

ngOnInit(){
 let id=this.route.snapshot.params['id'];
  this.servedentis.voirDetails(id);
  return console.log(this.servedentis.voirDetails(id));
}
}
