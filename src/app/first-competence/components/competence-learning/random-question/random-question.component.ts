import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-random-question',
  templateUrl: './random-question.component.html',
  styleUrl: './random-question.component.css'
})
export class RandomQuestionComponent {
  currentCardIndex = -1; // Al principio, ninguna carta está seleccionada
  cards = [
    {
      image: '../../../../../assets/images/manzana.png',  // Ruta de la imagen
      question: "Un grupo de obreros ha pintado los 3/5 de un mural, y el otro grupo, la mitad de lo que falta. ¿Qué fracción del total del mural falta pintar?",
      revealed: false,
      route: '/checking1'
    },
    {
      image: '../../../../../assets/images/perab2.png',  // Ruta de la imagen
      question: "Se tiene un listón de madera de 3/10 m. ¿Cuántos metros más de madera debo adquirir para completar 17/20 m?",
      revealed: false,
      route: '/checking2'
    },
    {
      image: '../../../../../assets/images/sandia.png',  // Ruta de la imagen
      question: "Una piscina inflable de 5200 L de capacidad está llena hasta sus 3/8. ¿Cuántos litros de agua hay que agregar para llenar la piscina?",
      revealed: false,
      route: '/checking3'
    }
  ];

  constructor(private router: Router) {}

  revealCard(index: number) {
    if (this.currentCardIndex === -1) {
      this.currentCardIndex = index;
      this.cards[index].revealed = true;
    }
  }

  goToQuestion(route: string) {
    this.router.navigate([route]);
  }
}
