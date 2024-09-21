import {Component, OnInit} from '@angular/core';
import {Question} from "../../../capacityone/model/Question";
import {AnswerOption} from "../../../capacityone/model/AnswerOption";
import {QuestionService} from "../../../capacityone/services/question.service";
import {AnswerOptionService} from "../../../capacityone/services/answer-option.service";




@Component({
  selector: 'app-pruebainit',
  templateUrl: './pruebainit.component.html',
  styleUrl: './pruebainit.component.css'
})

export class PruebainitComponent implements OnInit {
  questions: Question[] = [];
  answerOptions: AnswerOption[] = [];

  constructor(
    private questionService: QuestionService,
    private answerOptionService: AnswerOptionService
  ) {}

  ngOnInit(): void {
    // Llamadas a los servicios para obtener las preguntas y respuestas
    this.loadQuestions();
    this.loadAnswerOptions();
  }

  loadQuestions(): void {
    this.questionService.getQuestions().subscribe({
      next: (data: Question[]) => {
        this.questions = data;
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

  // Método para obtener las respuestas filtradas por el ID de la pregunta
  getOptionsByQuestionId(questionId: number): AnswerOption[] {
    return this.answerOptions.filter(option => option.questionId === questionId);
  }
}
