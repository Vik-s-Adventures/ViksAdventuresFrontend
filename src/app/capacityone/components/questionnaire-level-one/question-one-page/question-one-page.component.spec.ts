import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOnePageComponent } from './question-one-page.component';

describe('QuestionOnePageComponent', () => {
  let component: QuestionOnePageComponent;
  let fixture: ComponentFixture<QuestionOnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuestionOnePageComponent]
    });
    fixture = TestBed.createComponent(QuestionOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
