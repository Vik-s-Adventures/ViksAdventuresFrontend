import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-question-one-page',
  templateUrl: './question-one-page.component.html',
  styleUrls: ['./question-one-page.component.css']
})
export class QuestionOnePageComponent{

  answer: string | undefined;
  answers: string[] = ['A) 3 PANES', 'B) 6 PANES', 'C) 9 PANES', 'D) 12 PANES'];


}
