import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../profile/services/student.service";
import {QuizResultService} from "../../../first-competence/services/quiz-result.service";
import {Student} from "../../../profile/model/Student";
import {Result} from "../../../first-competence/model/Result";


@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.css'
})
export class RankingPageComponent {
  studentsWithScores = [
    { firstName: 'Leydi', lastName: 'Gómez', score: 95 },
    { firstName: 'Carlos', lastName: 'Pérez', score: 88 },
    { firstName: 'Ana', lastName: 'López', score: 92 },
    { firstName: 'Jorge', lastName: 'Hernández', score: 85 },
    { firstName: 'Sofía', lastName: 'Martínez', score: 90 }
  ].sort((a, b) => b.score - a.score); // Ordenar de mayor a menor
}
