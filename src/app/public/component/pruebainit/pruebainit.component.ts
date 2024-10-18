import {Component, OnInit} from '@angular/core';
import {Question} from "../../../first-competence/model/Question";
import {Option} from "../../../first-competence/model/Option";
import {QuestionService} from "../../../first-competence/services/question.service";
import {AnswerOptionService} from "../../../first-competence/services/answer-option.service";


@Component({
  selector: 'app-pruebainit',
  templateUrl: './pruebainit.component.html',
  styleUrl: './pruebainit.component.css'
})

export class PruebainitComponent implements OnInit {
  questions: Question[] = [];
  answerOptions: Option[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion!: Question;
  selectedAnswer: Option | null = null;

  constructor(
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
      next: (data: Option[]) => {
        this.answerOptions = data;
      },
      error: (error) => {
        console.error('Error al cargar las opciones de respuesta', error);
      }
    });
  }

  // Método para obtener las respuestas filtradas por el ID de la pregunta
  getOptionsByQuestionId(questionId: number): Option[] {
    return this.answerOptions.filter(option => option.questionId === questionId);
  }

  // Método para pasar a la siguiente pregunta
  nextQuestion(): void {
    this.selectedAnswer = null; // Resetear la selección
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      alert('Has completado el cuestionario');
    }
  }
}
