import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MapsPageComponent} from "./public/component/maps-page/maps-page.component";
import {WelcomeQuestionnairePageComponent} from "./public/component/welcome-questionnaire-page/welcome-questionnaire-page.component";
import {RouteMapPageComponent} from "./capacityone/components/route-map-page/route-map-page.component";
import {QuestionTwoPageComponent} from "./capacityone/components/questionnaire-level-one/question-two-page/question-two-page.component";
import {MenuPageComponent} from "./public/component/menu-page/menu-page.component";
import {RankingPageComponent} from "./public/component/ranking-page/ranking-page.component";
import {ProfilePageComponent} from "./profile/components/profile-page/profile-page.component";
import {ResultPageComponent} from "./capacityone/components/result-page/result-page.component";
import {
  PerformanceSublevelOneComponent
} from "./capacityone/components/perfomance/performance-sublevel-one/performance-sublevel-one.component";
import {
  PerformanceSublevelTwoComponent
} from "./capacityone/components/perfomance/performance-sublevel-two/performance-sublevel-two.component";

const routes: Routes = [
  {path: '', redirectTo:'menu', pathMatch:'full'},
  {path: 'menu', component: ResultPageComponent},
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
