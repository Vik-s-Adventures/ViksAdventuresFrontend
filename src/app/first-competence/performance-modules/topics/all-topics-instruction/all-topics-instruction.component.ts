import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-all-topics-instruction',
  templateUrl: './all-topics-instruction.component.html',
  styleUrl: './all-topics-instruction.component.css'
})
export class AllTopicsInstructionComponent{
  constructor(private router: Router) {}

  cards: {  id: number, title: string,image: string, route: string }[]= [
    { id: 1,title: 'FRACCIONES PARTE I', image: 'assets/images/fo11.jpg', route: '/topicOne'},
    { id: 2,title: 'PORCENTAJE', image: 'assets/images/fo22.jpg',route: '/topicTwo' },
    { id: 3,title: 'DECIMALES', image: 'assets/images/fo333.jpg',route: '/topicThree' },
    { id: 4,title: 'DIVISIBILIDAD Y MULTIPLOS', image: 'assets/images/fo44.jpeg',route: '/topicFour'},
    { id: 5,title: 'FRACCCIONES PARTE II', image: 'assets/images/fo555.jpg',route: '/topicFive' },

  ];



// Redirigir a la ruta específica cuando se selecciona una tarjeta
  navigateTo(cardId: number): void {
    const selectedCard = this.cards.find(card => card.id === cardId);
    if (selectedCard) {
      this.router.navigate([selectedCard.route]);
    }
  }

}

