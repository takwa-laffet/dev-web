import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-modifierprod',
  imports: [FormsModule],
  templateUrl: './modifierprod.html',
  styleUrl: './modifierprod.css',
})
export class Modifierprod {
 private route=inject(ActivatedRoute);
 private produitService=inject(ProduitService);
 produitId: any;
allproduits: Observable<any>[] = [];
  product: any;
 ngOnInit() {
  this.produitId=this.route.snapshot.params['id'];
  this.produitService.LireProd().subscribe(data=>{
    this.allproduits=data;
    this.product=this.allproduits.find((p:any)=>p.id==this.produitId);
  });
}

 onSubmit(form: NgForm) {
  this.produitService.modifProd(this.produitId,form.value).subscribe(data=>{
    console.log(data);
  })}

}