import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {TimerService} from "../../../shared/services/timer.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-time-counter-footer-page',
  templateUrl: './time-counter-footer-page.component.html',
  styleUrls: ['./time-counter-footer-page.component.css']
})
export class TimeCounterFooterPageComponent implements OnInit {

  constructor(private router: Router, public timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.startTimer();  // Iniciar o continuar el temporizador
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

  goToNext(): void {
    const currentUrl = this.router.url;
    if (currentUrl === '/questionOne') {
      this.router.navigate(['/questionTwo']);
    } else if (currentUrl === '/questionTwo') {
      this.router.navigate(['/questionThree']);
    } else {
      this.router.navigate(['/results']);  // Al finalizar, mostramos el tiempo total
    }
  }
}
