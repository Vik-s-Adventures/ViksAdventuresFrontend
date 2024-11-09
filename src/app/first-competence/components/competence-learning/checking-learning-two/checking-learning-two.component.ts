import { Component } from '@angular/core';

@Component({
  selector: 'app-checking-learning-two',
  templateUrl: './checking-learning-two.component.html',
  styleUrl: './checking-learning-two.component.css'
})
export class CheckingLearningTwoComponent {
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
