// lifecycle.ts
import { Component, Input, OnInit, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true, // Recommandé en Angular moderne
  template: `<div> <h1> Composant Enfant </h1> <p>Valeur reçue : {{data}} </p></div>`,
})
export class Lifecycle implements OnInit, OnChanges, OnDestroy {
  @Input() data: number = 0;

  constructor() {
    console.log('1. Constructor : Le composant est créé');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges : La donnée a changé', changes['data'].currentValue);
  }

  ngOnInit() {
    console.log("3. ngOnInit : Le composant est initialisé");
  }

  ngOnDestroy() {
    console.log("4. ngOnDestroy : Le composant va être supprimé");
  }
}
//<Lifecycle [data]="0"></Lifecycle> dans le parent pour tester les changements de données et la destruction du composant.