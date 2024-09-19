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
import {
  QuestionOnePageComponent
} from "./capacityone/components/questionnaire-level-one/question-one-page/question-one-page.component";
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
import {
  QuestionThreePageComponent
} from "./capacityone/components/questionnaire-level-one/question-three-page/question-three-page.component";
import {GooglefontComponent} from "./public/component/googlefont/googlefont.component";
import {
  PerformanceSublevelOneComponent
} from "./capacityone/components/performance-sublevel-one/performance-sublevel-one.component";




@NgModule({
  declarations: [
    AppComponent,
    MapsPageComponent,
    WelcomeQuestionnairePageComponent,
    QuestionOnePageComponent,
    RouteMapPageComponent,
    VickSpriteComponent,
    PruebaspriteComponent,
    QuestionTwoPageComponent,
    QuestionThreePageComponent,
    TimeCounterFooterPageComponent,
    GooglefontComponent,
    PerformanceSublevelOneComponent
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
  ],
  providers: [{provide:HttpClientModule, useClass:HttpClientModule},],
  bootstrap: [AppComponent]
})
export class AppModule { }
