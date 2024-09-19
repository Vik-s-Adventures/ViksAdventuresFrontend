import { Component } from '@angular/core';


@Component({
  selector: 'app-question-two-page',
  templateUrl: './question-two-page.component.html',
  styleUrl: './question-two-page.component.css'
})
export class QuestionTwoPageComponent {
  answer: string | undefined;
  answers: string[] = ['A) 900 PERSONAS', 'B) 1200 PERSONAS', 'C) 1600 PERSONAS', 'D) 4800 PERSONAS'];
}
