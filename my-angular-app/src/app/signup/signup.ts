import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true, // Assuming Angular 17/18+
  imports: [FormsModule],
  templateUrl: './signup.html',
})
export class Signup {
  private authService = inject(AuthService);
  
  // If you want to keep a list of signed-up users locally
  usersList: any[] = [];

  cree(form: NgForm) {
    if (form.invalid) return;

    this.authService.signup(form.value).subscribe({
      next: (res) => {
        console.log("User created:", res);
        this.usersList.push(res);
        form.reset(); // Clear the form after success
      },
      error: (err) => {
        console.error("Signup failed:", err);
      }
    });
  }
}