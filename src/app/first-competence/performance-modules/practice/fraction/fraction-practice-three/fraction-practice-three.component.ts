import { Component } from '@angular/core';

@Component({
  selector: 'app-fraction-practice-three',
  templateUrl: './fraction-practice-three.component.html',
  styleUrl: './fraction-practice-three.component.css'
})
export class FractionPracticeThreeComponent {
  // Configuración de fracciones con imágenes y respuestas correctas
  fractions = [
    { id: 1, img: 'assets/images/ff.png', answer: '1/5', userAnswer: '', type: 'Homogénea' },
    { id: 2, img: 'assets/images/ff.png', answer: '4/5', userAnswer: '', type: 'Homogénea' },
    { id: 3, img: 'assets/images/ff.png', answer: '2/5', userAnswer: '', type: 'Homogénea' },
    { id: 4, img: 'assets/images/ff.png', answer: '3/6', userAnswer: '', type: 'Heterogénea' },
    { id: 5, img: 'assets/images/ff.png', answer: '2/4', userAnswer: '', type: 'Heterogénea' },
    { id: 6, img: 'assets/images/ff.png', answer: '1/3', userAnswer: '', type: 'Heterogénea' }
  ];

  isCompleted: boolean = false;

  // Método para verificar si todas las respuestas son correctas
  checkAnswers() {
    this.isCompleted = this.fractions.every(
      (fraction) => fraction.userAnswer.trim() === fraction.answer
    );
  }
}
