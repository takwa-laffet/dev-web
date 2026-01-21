import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-setting',
  imports: [],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  user : any;
  constructor(private route : ActivatedRoute){
    console.log(this.route.data.subscribe);
    this.route.data.subscribe((data) => { 
      
      this.user = data['Users'];
     console.log(this.user);
      
    } ); }


}
