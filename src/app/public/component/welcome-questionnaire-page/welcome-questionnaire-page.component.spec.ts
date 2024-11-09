import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeQuestionnairePageComponent } from './welcome-questionnaire-page.component';

describe('WelcomeQuestionnairePageComponent', () => {
  let component: WelcomeQuestionnairePageComponent;
  let fixture: ComponentFixture<WelcomeQuestionnairePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WelcomeQuestionnairePageComponent]
    });
    fixture = TestBed.createComponent(WelcomeQuestionnairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
