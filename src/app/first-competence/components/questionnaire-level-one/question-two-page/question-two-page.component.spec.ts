import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTwoPageComponent } from './question-two-page.component';

describe('QuestionTwoPageComponent', () => {
  let component: QuestionTwoPageComponent;
  let fixture: ComponentFixture<QuestionTwoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTwoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
