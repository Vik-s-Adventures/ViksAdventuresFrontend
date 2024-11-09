import { Component } from '@angular/core';

@Component({
  selector: 'app-checking-learning-one',
  templateUrl: './checking-learning-one.component.html',
  styleUrl: './checking-learning-one.component.css'
})
export class CheckingLearningOneComponent {
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
