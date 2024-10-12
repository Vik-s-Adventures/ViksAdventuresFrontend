import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MapsPageComponent} from "./public/component/maps-page/maps-page.component";
import {WelcomeQuestionnairePageComponent} from "./public/component/welcome-questionnaire-page/welcome-questionnaire-page.component";
import {RouteMapPageComponent} from "./first-competence/components/route-map-page/route-map-page.component";
import {QuestionTwoPageComponent} from "./first-competence/components/questionnaire-level-one/question-two-page/question-two-page.component";
import {MenuPageComponent} from "./public/component/menu-page/menu-page.component";
import {RankingPageComponent} from "./public/component/ranking-page/ranking-page.component";
import {ProfilePageComponent} from "./profile/components/profile-page/profile-page.component";
import {ResultPageComponent} from "./first-competence/components/result-page/result-page.component";
import {
  PerformanceSublevelOneComponent
} from "./first-competence/components/perfomance/performance-sublevel-one/performance-sublevel-one.component";
import {
  PerformanceSublevelTwoComponent
} from "./first-competence/components/perfomance/performance-sublevel-two/performance-sublevel-two.component";
import {ChallengesOneComponent} from "./first-competence/components/challenges/challenges-one/challenges-one.component";
import {ChallengesTwoComponent} from "./first-competence/components/challenges/challenges-two/challenges-two.component";
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
  SevenInstructionComponent
} from "./first-competence/performance-modules/seven-instruction/seven-instruction.component";

const routes: Routes = [
  {path: '', redirectTo:'menu', pathMatch:'full'},
  {path: 'menu', component: MenuPageComponent},
  {path: 'questionnaire', component: QuestionTwoPageComponent},
  {path: 'welcomeQuestionnaire', component: WelcomeQuestionnairePageComponent},
  {path: 'questionTwo', component: QuestionTwoPageComponent},
  {path: 'maps', component: MapsPageComponent},
  {path: 'ranking', component: RankingPageComponent},
  {path: 'routeMap', component: RouteMapPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'result', component: ResultPageComponent},
  {path: 'sublevel1', component: PerformanceSublevelOneComponent},
  {path: 'sublevel2', component: PerformanceSublevelTwoComponent},
  {path: 'sublevel3', component: PerformanceSublevelThreeComponent},
  {path: 'challengeOne', component: ChallengesOneComponent},
  {path: 'challengeTwo', component: ChallengesTwoComponent},
  {path: 'instructionOne', component: LevelOneInstructionComponent},
  {path: 'instructionTwo', component: LevelTwoInstructionComponent},
  {path: 'oneInstruction', component: OneInstructionComponent},
  {path: 'twoInstruction', component: TwoInstructionComponent},
  {path: 'threeInstruction', component: ThreeInstructionComponent},
  {path: 'fourInstruction', component: FourInstructionComponent},
  {path: 'fiveInstruction', component: FiveInstructionComponent},
  {path: 'sixInstruction', component: SixInstructionComponent},
  {path: 'sevenInstruction', component: SevenInstructionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
