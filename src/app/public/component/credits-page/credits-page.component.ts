import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-credits-page',

  templateUrl: './credits-page.component.html',
  styleUrl: './credits-page.component.css'
})
export class CreditsPageComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']); // Cambia '/menu' a la ruta real de tu menú principal
  }
}
