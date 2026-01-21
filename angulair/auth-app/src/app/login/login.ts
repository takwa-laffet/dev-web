import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private route:Router){
  }
login(){
  sessionStorage.setItem('login','123');
  this.route.navigate(['/dashboard']);
  console.log(sessionStorage.getItem('login'));

}
}
