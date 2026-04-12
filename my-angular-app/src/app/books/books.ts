import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  private apiservice=inject(ApiService);
  b=signal<any[]>([]);
  //ngOnInt cest un cycle de vie d'un composant Angular qui est appelé
  //  après que le composant a été initialisé.
  ngOnInit(){
  this.apiservice.getbooks().subscribe((data =>this.b.set(data)));
  console.log(this.b());

  //subcribe est un methode de l'observable qui permet de s'abonner a un flux de donnees 
//this.books.set(data) est une methode de signal qui 
// permet de mettre a jour la valeur du signal books avec les donnees 
// recues de l'observable getbooks() de ApiService  
}
}
