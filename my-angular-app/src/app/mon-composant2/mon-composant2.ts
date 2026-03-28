import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
@Component({
  selector: 'app-mon-composant2',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './mon-composant2.html',
  styleUrl: './mon-composant2.css',
})
export class MonComposant2 {
  private route=inject(ActivatedRoute);
  userName=this.route.snapshot.params['userName'];
}
