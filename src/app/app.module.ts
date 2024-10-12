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
import {RouteMapPageComponent} from "./first-competence/components/route-map-page/route-map-page.component";
import {VickSpriteComponent} from "./public/component/vick-sprite/vick-sprite.component";
import {PruebaspriteComponent} from "./public/component/pruebasprite/pruebasprite.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {TimeCounterFooterPageComponent} from "./public/component/time-counter-footer-page/time-counter-footer-page.component";
import {
  QuestionTwoPageComponent
} from "./first-competence/components/questionnaire-level-one/question-two-page/question-two-page.component";
import {GooglefontComponent} from "./public/component/googlefont/googlefont.component";
import {
  PerformanceSublevelOneComponent
} from "./first-competence/components/perfomance/performance-sublevel-one/performance-sublevel-one.component";
import {
  PerformanceSublevelTwoComponent
} from "./first-competence/components/perfomance/performance-sublevel-two/performance-sublevel-two.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {QuestionService} from "./first-competence/services/question.service";
import {PruebainitComponent} from "./public/component/pruebainit/pruebainit.component";
import {AnswerOptionService} from "./first-competence/services/answer-option.service";
import {StudentService} from "./profile/services/student.service";
import {QuizService} from "./first-competence/services/quiz.service";
import {QuizResultService} from "./first-competence/services/quiz-result.service";
import {StudentResponseService} from "./first-competence/services/student-response.service";
import {MenuPageComponent} from "./public/component/menu-page/menu-page.component";
import {RankingPageComponent} from "./public/component/ranking-page/ranking-page.component";
import {ProfilePageComponent} from "./profile/components/profile-page/profile-page.component";
import {ChallengesOneComponent} from "./first-competence/components/challenges/challenges-one/challenges-one.component";
import {ChallengesTwoComponent} from "./first-competence/components/challenges/challenges-two/challenges-two.component";
import {HeaderPageComponent} from "./public/component/header-page/header-page.component";
import {ResultPageComponent} from "./first-competence/components/result-page/result-page.component";
import {
  LevelOneInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-one-instruction/level-one-instruction.component";

import {
  OneInstructionComponent
} from "./first-competence/performance-modules/one-instruction/one-instruction.component";
import {
  TwoInstructionComponent
} from "./first-competence/performance-modules/two-instruction/two-instruction.component";
import {
  LevelTwoInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-two-instruction/level-two-instruction.component";
import {
  ThreeInstructionComponent
} from "./first-competence/performance-modules/three-instruction/three-instruction.component";
import {
  FourInstructionComponent
} from "./first-competence/performance-modules/four-instruction/four-instruction.component";
import {
  PerformanceSublevelThreeComponent
} from "./first-competence/components/perfomance/performance-sublevel-three/performance-sublevel-three.component";
import {
  FiveInstructionComponent
} from "./first-competence/performance-modules/five-instruction/five-instruction.component";
import {
  SixInstructionComponent
} from "./first-competence/performance-modules/six-instruction/six-instruction.component";
import {
  LevelFiveInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-five-instruction/level-five-instruction.component";
import {
  LevelFourInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-four-instruction/level-four-instruction.component";
import {
  LevelSevenInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-seven-instruction/level-seven-instruction.component";
import {
  LevelSixInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-six-instruction/level-six-instruction.component";
import {
  LevelThreeInstructionComponent
} from "./first-competence/performance-modules/dialogue-instruction/level-three-instruction/level-three-instruction.component";




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
        ProfilePageComponent,
        ChallengesOneComponent,
        ChallengesTwoComponent,
        HeaderPageComponent,
        ResultPageComponent,
        LevelOneInstructionComponent,
        OneInstructionComponent,
        TwoInstructionComponent,
        LevelTwoInstructionComponent,
        ThreeInstructionComponent,
        FourInstructionComponent,
        PerformanceSublevelThreeComponent,
        FiveInstructionComponent,
        SixInstructionComponent,
      LevelFiveInstructionComponent,
      LevelFourInstructionComponent,
      LevelSevenInstructionComponent,
      LevelSixInstructionComponent,
      LevelThreeInstructionComponent,
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
    exports: [
        HeaderPageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
