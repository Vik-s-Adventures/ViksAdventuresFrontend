import { Component } from '@angular/core';
import {HeaderPageComponent} from "../../../../public/component/header-page/header-page.component";
import {MatCardModule} from "@angular/material/card";
import {Router} from "@angular/router";


@Component({
  selector: 'app-challenges-two',
  templateUrl: './challenges-two.component.html',
  styleUrl: './challenges-two.component.css'
})
export class ChallengesTwoComponent {
  answer: string | undefined;
  answers: string[] = ['A) 3 PANES', 'B) 6 PANES', 'C) 9 PANES', 'D) 12 PANES'];
  constructor(private router: Router) {
  }


  navigateToComponent1() {
    this.router.navigate(['/sublevel2']);
  }

  navigateToComponent2() {
    this.router.navigate(['/random']);
  }

}
