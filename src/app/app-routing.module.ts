import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MapsPageComponent} from "./public/component/maps-page/maps-page.component";
import {
  WelcomeQuestionnairePageComponent
} from "./public/component/welcome-questionnaire-page/welcome-questionnaire-page.component";
import {RouteMapPageComponent} from "./capacityone/components/route-map-page/route-map-page.component";
import {VickSpriteComponent} from "./public/component/vick-sprite/vick-sprite.component";
import {PruebaspriteComponent} from "./public/component/pruebasprite/pruebasprite.component";
import {
  QuestionTwoPageComponent
} from "./capacityone/components/questionnaire-level-one/question-two-page/question-two-page.component";
import {GooglefontComponent} from "./public/component/googlefont/googlefont.component";
import {
  PerformanceSublevelOneComponent
} from "./capacityone/components/performance-sublevel-one/performance-sublevel-one.component";
import {
  PerformanceSublevelTwoComponent
} from "./capacityone/components/performance-sublevel-two/performance-sublevel-two.component";
import {PruebainitComponent} from "./public/component/pruebainit/pruebainit.component";
import {MenuPageComponent} from "./public/component/menu-page/menu-page.component";
import {RankingPageComponent} from "./public/component/ranking-page/ranking-page.component";

const routes: Routes = [
  {path: '', redirectTo:'menu', pathMatch:'full'},
  {path: 'menu', component: MenuPageComponent},
  {path: 'questionnaire', component: QuestionTwoPageComponent},
  {path: 'welcomeQuestionnaire', component: WelcomeQuestionnairePageComponent},
  {path: 'questionTwo', component: QuestionTwoPageComponent},
  {path: 'maps', component: MapsPageComponent},
  {path: 'ranking', component: RankingPageComponent},
  {path: 'routeMap', component: RouteMapPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
