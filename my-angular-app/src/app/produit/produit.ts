import { Component, inject } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  private produitService=inject(ProduitService);
  produits:any[]=[];
  ngOnInit(){
    this.produitService.LireProd().subscribe((data:any)=>{
      this.produits=data;
    })
  }
  prod(form:NgForm){
this.produitService.creerProd(form.value).subscribe((data:any)=>{
  console.log(data);
  this.produits.push(data);   
})}
supprimer(id:string){
  console.log("we are in delete method with id:", id);
  this.produitService.supprimerProd(id).subscribe((data:any)=>{
    
    console.log("Produit supprimé :", data);
    
   this.produits=this.produits.filter(p=>p.id!==id);
  })}

}
