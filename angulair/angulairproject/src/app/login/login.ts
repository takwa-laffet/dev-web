import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title:string="hi this is my first angular project";
  count:number=0;
  increment(){this.count=this.count+1;  }

  decrement(){this.count--;}
  imageurl:string="https://climate.copernicus.eu/sites/default/files/styles/hero_image_extra_large_2x/public/2023-07/iStock-1267333118.jpg?itok=1udeNtwZ"
username:string="";

}
