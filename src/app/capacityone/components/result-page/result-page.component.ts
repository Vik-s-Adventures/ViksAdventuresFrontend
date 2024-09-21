import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterLink,
    NgClass,
    NgForOf
  ],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent {
  cards: { value: number, id: number, route: string }[] = [
    { value: 0, id: 1, route: '/sublevel1' },
    { value: 1, id: 2, route: '/componente' },
    { value: 0, id: 3, route: '/sublevel2' },
    { value: 1, id: 4, route: '/component4' },
    { value: 0, id: 5, route: '/component5' },
    { value: 1, id: 6, route: '/component6' },
    { value: 0, id: 7, route: '/component7' },
    { value: 1, id: 8, route: '/component8' },
    { value: 0, id: 9, route: '/component9' },
    { value: 1, id: 10, route: '/component10' }
  ];

  constructor(private router: Router) {
  }


  // Redirigir a la ruta específica cuando se selecciona una tarjeta
  onCardSelect(cardId: number): void {
    const selectedCard = this.cards.find(card => card.id === cardId);
    if (selectedCard) {
      this.router.navigate([selectedCard.route]);
    }
  }
}
