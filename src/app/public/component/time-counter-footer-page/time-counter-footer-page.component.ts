import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TimerService} from "../../../shared/services/timer.service";

@Component({
  selector: 'app-time-counter-footer-page',
  templateUrl: './time-counter-footer-page.component.html',
  styleUrls: ['./time-counter-footer-page.component.css']
})
export class TimeCounterFooterPageComponent implements OnInit {

  constructor(private router: Router, public timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.startTimer();  // Iniciar el cronómetro de 5 minutos
    this.updateTimerDisplay();       // Mostrar el tiempo en pantalla
  }

  updateTimerDisplay(): void {
    const timerElement = document.getElementById('timer');
    setInterval(() => {
      if (timerElement) {
        timerElement.innerText = this.timerService.getFormattedTime();  // Actualizar cada segundo
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.timerService.stopTimer();  // Detener el temporizador cuando el componente se destruya
  }
}
