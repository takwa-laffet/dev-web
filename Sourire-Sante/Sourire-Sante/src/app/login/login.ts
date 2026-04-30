import { Component, inject } from '@angular/core';
import {ServiceAuth} from "../service/serviceAuth";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private service=inject(ServiceAuth);
  email=""
  password=""
  connect(){
    this.service.login(this.email,this.password);
  }
}

