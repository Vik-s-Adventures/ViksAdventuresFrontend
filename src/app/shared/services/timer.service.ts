import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root' // Singleton: hace que el servicio esté disponible en toda la app
})
export class TimerService {
  private intervalId: any;
  public minutes: number = 10;  // Inicializar en 5 minutos
  public seconds: number = 0;

  constructor(private router: Router) {
    this.loadTimerState();  // Cargar el tiempo desde el almacenamiento (en caso de refresh)
  }

  startTimer(): void {
    if (!this.intervalId) {  // Solo iniciar si no hay un temporizador corriendo
      this.intervalId = setInterval(() => {
        this.decrementTime();

        this.saveTimerState();  // Guardar el estado del temporizador continuamente

        if (this.minutes === 0 && this.seconds === 0) {
          this.stopTimer();
          this.router.navigate(['/mapstypes']);  // Redirigir cuando el cronómetro llegue a 0
        }
      }, 1000);
    }
  }

  stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  decrementTime(): void {
    if (this.seconds === 0) {
      if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      }
    } else {
      this.seconds--;
    }
  }

  getFormattedTime(): string {
    return this.formatTime(this.minutes) + ':' + this.formatTime(this.seconds);
  }

  // Guardar el estado del temporizador en sessionStorage
  private saveTimerState(): void {
    const timerState = {
      minutes: this.minutes,
      seconds: this.seconds
    };
    sessionStorage.setItem('timerState', JSON.stringify(timerState));
  }

  // Cargar el estado del temporizador desde sessionStorage
  private loadTimerState(): void {
    const savedState = sessionStorage.getItem('timerState');
    if (savedState) {
      const timerState = JSON.parse(savedState);
      this.minutes = timerState.minutes;
      this.seconds = timerState.seconds;
    }
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  resetTimer(): void {
    this.minutes = 5;  // Reiniciar a 5 minutos
    this.seconds = 0;
    this.saveTimerState();  // Resetear el estado guardado
  }
}
