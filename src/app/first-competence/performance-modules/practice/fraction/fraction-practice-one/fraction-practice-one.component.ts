import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-fraction-practice-one',
  templateUrl: './fraction-practice-one.component.html',
  styleUrl: './fraction-practice-one.component.css'
})
export class FractionPracticeOneComponent {
  constructor(private router: Router) {}
  topInput: string = '';
  bottomInput: string = '';
  feedbackMessage: string = '';
  isCompleted: boolean = false;

  // Método que se llama al hacer clic en "Enviar"
  checkAnswer() {
    if (this.topInput.trim().toLowerCase() === 'numerador' && this.bottomInput.trim().toLowerCase() === 'denominador') {
      this.feedbackMessage = '¡Genial! Has completado la dinámica correctamente.';
      this.isCompleted = true;
    } else {
      this.feedbackMessage = 'Inténtalo de nuevo.';
      this.resetInputs();
    }
  }

  // Resetear los campos de entrada si la respuesta es incorrecta
  resetInputs() {
    this.topInput = '';
    this.bottomInput = '';
  }

  goToNext() {
    this.router.navigate(['/fra2']); // Cambia '/menu' a la ruta real de tu menú principal
  }
}

