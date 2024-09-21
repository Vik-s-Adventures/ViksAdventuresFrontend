import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MapsPageComponent} from "./public/component/maps-page/maps-page.component";
import {
  WelcomeQuestionnairePageComponent
} from "./public/component/welcome-questionnaire-page/welcome-questionnaire-page.component";
import {
  QuestionOnePageComponent
} from "./capacityone/components/questionnaire-level-one/question-one-page/question-one-page.component";
import {RouteMapPageComponent} from "./capacityone/components/route-map-page/route-map-page.component";
import {VickSpriteComponent} from "./public/component/vick-sprite/vick-sprite.component";
import {PruebaspriteComponent} from "./public/component/pruebasprite/pruebasprite.component";
import {
  QuestionTwoPageComponent
} from "./capacityone/components/questionnaire-level-one/question-two-page/question-two-page.component";
import {
  QuestionThreePageComponent
} from "./capacityone/components/questionnaire-level-one/question-three-page/question-three-page.component";
import {GooglefontComponent} from "./public/component/googlefont/googlefont.component";
import {
  PerformanceSublevelOneComponent
} from "./capacityone/components/performance-sublevel-one/performance-sublevel-one.component";
import {
  PerformanceSublevelTwoComponent
} from "./capacityone/components/performance-sublevel-two/performance-sublevel-two.component";
import {PruebainitComponent} from "./public/component/pruebainit/pruebainit.component";

const routes: Routes = [
  {path: '', redirectTo:'maps', pathMatch:'full'},
  {path: 'maps', component: PruebainitComponent},
  {path: 'welcomeQuestionnaire', component: WelcomeQuestionnairePageComponent},
  {path: 'questionOne', component: QuestionOnePageComponent},
  {path: 'questionTwo', component: QuestionTwoPageComponent},
  {path: 'questionThree', component: QuestionThreePageComponent},
  {path: 'mapstypes', component: MapsPageComponent},
  {path: 'routeMap', component: RouteMapPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
