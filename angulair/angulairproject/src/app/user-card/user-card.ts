import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgStyle } from '@angular/common'; // Import this!

@Component({
  selector: 'app-user-card',
  imports: [FormsModule,CommonModule,NgStyle],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  x=10;  textColor ="black";
  isActive:boolean=true;
  isdisabled:boolean=false;

  status():void{
    this.isActive = !this.isActive;
  }
disable():void{
  this.isdisabled = !this.isdisabled;}
}
