import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Singleton: hace que el servicio esté disponible en toda la app
})
export class TimerService {
  private intervalId: any;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  constructor() {
    this.loadTimerState();  // Cargar el tiempo desde el almacenamiento (en caso de refresh)
  }

  startTimer(): void {
    if (!this.intervalId) {  // Solo iniciar si no hay un temporizador corriendo
      this.intervalId = setInterval(() => {
        this.seconds++;

        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }

        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }

        this.saveTimerState();  // Guardar el estado del temporizador continuamente
      }, 1000);
    }
  }

  stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  getFormattedTime(): string {
    return this.formatTime(this.hours) + ':' + this.formatTime(this.minutes) + ':' + this.formatTime(this.seconds);
  }

  // Guardar el estado del temporizador en sessionStorage
  private saveTimerState(): void {
    const timerState = {
      hours: this.hours,
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
      this.hours = timerState.hours;
      this.minutes = timerState.minutes;
      this.seconds = timerState.seconds;
    }
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  resetTimer(): void {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.saveTimerState();  // Resetear el estado guardado
  }
}
