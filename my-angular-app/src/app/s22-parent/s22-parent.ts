import { Component } from '@angular/core';
import { S22 } from '../s22/s22'; //import enfant
@Component({
  selector: 'app-s22-parent',
  imports: [S22],
  templateUrl: './s22-parent.html',
  styleUrl: './s22-parent.css',
})
export class S22Parent {
  m='salut cest un message de parent';
  wating:string='waiting for child message...';
  
}
