import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {MapsPageComponent} from "./public/component/maps-page/maps-page.component";
import {
  WelcomeQuestionnairePageComponent
} from "./public/component/welcome-questionnaire-page/welcome-questionnaire-page.component";

import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouteMapPageComponent} from "./capacityone/components/route-map-page/route-map-page.component";
import {VickSpriteComponent} from "./public/component/vick-sprite/vick-sprite.component";
import {PruebaspriteComponent} from "./public/component/pruebasprite/pruebasprite.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {TimeCounterFooterPageComponent} from "./public/component/time-counter-footer-page/time-counter-footer-page.component";
import {
  QuestionTwoPageComponent
} from "./capacityone/components/questionnaire-level-one/question-two-page/question-two-page.component";
import {GooglefontComponent} from "./public/component/googlefont/googlefont.component";
import {
  PerformanceSublevelOneComponent
} from "./capacityone/components/perfomance/performance-sublevel-one/performance-sublevel-one.component";
import {
  PerformanceSublevelTwoComponent
} from "./capacityone/components/perfomance/performance-sublevel-two/performance-sublevel-two.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {QuestionService} from "./capacityone/services/question.service";
import {PruebainitComponent} from "./public/component/pruebainit/pruebainit.component";
import {AnswerOptionService} from "./capacityone/services/answer-option.service";
import {StudentService} from "./profile/services/student.service";
import {QuizService} from "./capacityone/services/quiz.service";
import {QuizResultService} from "./capacityone/services/quiz-result.service";
import {StudentResponseService} from "./capacityone/services/student-response.service";
import {MenuPageComponent} from "./public/component/menu-page/menu-page.component";
import {RankingPageComponent} from "./public/component/ranking-page/ranking-page.component";
import {ProfilePageComponent} from "./profile/components/profile-page/profile-page.component";




@NgModule({
  declarations: [
    AppComponent,
    MapsPageComponent,
    WelcomeQuestionnairePageComponent,
    RouteMapPageComponent,
    VickSpriteComponent,
    PruebaspriteComponent,
    QuestionTwoPageComponent,
    TimeCounterFooterPageComponent,
    GooglefontComponent,
    PerformanceSublevelOneComponent,
    PerformanceSublevelTwoComponent,
    PruebainitComponent,
    MenuPageComponent,
    RankingPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [QuestionService, AnswerOptionService, StudentService, QuizService, QuizResultService, StudentResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
