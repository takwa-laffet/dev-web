import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-mon-composant',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './mon-composant.html',
  styleUrl: './mon-composant.css',
})
export class MonComposant {
  userName="Takwa";
}
