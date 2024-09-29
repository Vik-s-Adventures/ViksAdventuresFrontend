import { Component } from '@angular/core';


@Component({
  selector: 'app-challenges-one',

  templateUrl: './challenges-one.component.html',
  styleUrl: './challenges-one.component.css'
})
export class ChallengesOneComponent {
  answer: string | undefined;
  answers: string[] = ['A) 3 PANES', 'B) 6 PANES', 'C) 9 PANES', 'D) 12 PANES'];


}
