import { Component } from '@angular/core';


@Component({
  selector: 'app-question-three-page',
  templateUrl: './question-three-page.component.html',
  styleUrl: './question-three-page.component.css'
})
export class QuestionThreePageComponent {
  answer: string | undefined;
  answers: string[] = ['A) 5/7 DE LA REGLA', 'B) 4/7 DE LA REGLA', 'C) 4/8 DE LA REGLA', 'D) 5/8 DE LA REGLA'];


}
