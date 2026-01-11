import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  router = inject(Router);
  score:number;
constructor(){
  const state=this.router.getCurrentNavigation()?.extras.state as {score:number};
  this.score=state?.score ?? 0;
}
restart(){
this.router.navigate(['/quiz']);
}
}
