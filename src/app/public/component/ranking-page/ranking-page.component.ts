import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../capacityone/services/student.service";
import {QuizResultService} from "../../../capacityone/services/quiz-result.service";
import {Student} from "../../../capacityone/model/Student";
import {QuizResult} from "../../../capacityone/model/QuizResult";


@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrl: './ranking-page.component.css'
})
export class RankingPageComponent implements OnInit {
  studentsWithScores: any[] = [];

  constructor(
    private studentService: StudentService,
    private quizResultService: QuizResultService
  ) {
  }

  ngOnInit(): void {
    this.loadRankingData();
  }

  loadRankingData(): void {
    // Obtener estudiantes y resultados del cuestionario
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.quizResultService.getQuizResults().subscribe((quizResults: QuizResult[]) => {
        // Unir los resultados del cuestionario con los estudiantes
        this.studentsWithScores = students.map(student => {
          const result = quizResults.find(qr => qr.studentId === student.id);
          return {
            firstName: student.firstName,
            lastName: student.lastName,
            score: result ? result.score : 0  // Si no tiene resultado, asignar 0
          };
        });

        // Ordenar los estudiantes por score de forma descendente
        this.studentsWithScores.sort((a, b) => b.score - a.score);
      });
    });
  }
}
