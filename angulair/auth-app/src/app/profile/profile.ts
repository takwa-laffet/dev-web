import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  userId!:string | null ;

  constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
  this.userId=this.route.snapshot.paramMap.get('id');
  console.log(this.route);
}
}
