import {Component, OnInit} from '@angular/core';
import {Question} from "../../../model/Question";
import {AnswerOption} from "../../../model/AnswerOption";
import {QuestionService} from "../../../services/question.service";
import {AnswerOptionService} from "../../../services/answer-option.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-question-two-page',
  templateUrl: './question-two-page.component.html',
  styleUrl: './question-two-page.component.css'
})
export class QuestionTwoPageComponent implements OnInit{
  questions: Question[] = [];
  answerOptions: AnswerOption[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion!: Question;
  selectedAnswer: AnswerOption | null = null;

  constructor(
      private router: Router,
      private questionService: QuestionService,
      private answerOptionService: AnswerOptionService
) {}

  ngOnInit(): void {
    this.loadQuestions();
    this.loadAnswerOptions();
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe({
      next: (data: Question[]) => {
        this.questions = data;
        this.currentQuestion = this.questions[this.currentQuestionIndex]; // Mostrar la primera pregunta
      },
      error: (error) => {
        console.error('Error al cargar las preguntas', error);
      }
    });
  }

  loadAnswerOptions(): void {
    // @ts-ignore
    this.answerOptionService.getAnswerQuestions().subscribe({
      complete(): void {
      },
      next: (data: AnswerOption[]) => {
        this.answerOptions = data;
      },
      error: (error) => {
        console.error('Error al cargar las opciones de respuesta', error);
      }
    });
  }

  //Método para obtener las respuestas filtradas por el ID de la pregunta
  getOptionsByQuestionId(questionId: number): AnswerOption[] {
    return this.answerOptions.filter(option => option.questionId === questionId);
  }

  //Método para pasar a la siguiente pregunta
  nextQuestion(): void {
    this.selectedAnswer = null; // Resetear la selección
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  } else {
    alert('Has completado el cuestionario');
      this.router.navigate(['/result']);  // Reemplaza 'target-route' por tu ruta de destino
  }
}
}
