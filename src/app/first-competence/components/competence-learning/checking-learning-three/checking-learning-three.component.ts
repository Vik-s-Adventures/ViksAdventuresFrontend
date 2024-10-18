import { Component } from '@angular/core';

@Component({
  selector: 'app-checking-learning-three',
  templateUrl: './checking-learning-three.component.html',
  styleUrl: './checking-learning-three.component.css'
})
export class CheckingLearningThreeComponent {
  isOptionSelected = false;
  selectedOption: number | null = null;

  selectOption(option: number) {
    this.selectedOption = option;
    this.isOptionSelected = true;
  }

  submitAnswer() {
    console.log("La opción seleccionada es:", this.selectedOption);
    // Aquí iría la lógica para continuar con la siguiente pregunta o verificar la respuesta
  }
}
