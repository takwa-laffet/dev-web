import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ReversePipe } from '../pipe/reverse.pipe';
import { CommonModule } from '@angular/common';
import { CustomPipe } from '../pipe/custom.pipe';
@Component({
  selector: 'app-composont3',
  imports: [RouterOutlet,RouterLink,ReversePipe,CommonModule ,CustomPipe],
  templateUrl: './composont3.html',
  styleUrl: './composont3.css',
})
export class Composont3 {
  today = new Date();
  price =150;
  user={
    name:'ALI',
    date:'1989/05/15',
    email:'ali@exmple.com',
    isActive:true
  }
}
