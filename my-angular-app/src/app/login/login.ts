import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { email } from '@angular/forms/signals';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService =inject(AuthService);
  private router = inject(Router);
credentials = { email:'', password:''};

onlogin(){
  this.authService.login(this.credentials).subscribe(allowd=>{
    if(allowd){
      alert('Login successful!');
      this.router.navigate(['/produit']);
  }else{
    alert('Invalid credentials, please try again.');
  }
}
)
}
}
