import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/produits';
 readonly produitss = this.http.get(this.url);
  //creer un produit create
  creerProd(produit: any): Observable<any> {
    return this.http.post(this.url, produit);
  }
  //lire les produits read
  LireProd(): Observable<any> {
    return this.http.get(this.url).subscribe;
  }
  //modifier un produit update
  modifProd(id: string, produit: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, produit);
  }
  //supprimer un produit delete
  supprimerProd(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);

  }
}
