import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThreePageComponent } from './question-three-page.component';

describe('QuestionThreePageComponent', () => {
  let component: QuestionThreePageComponent;
  let fixture: ComponentFixture<QuestionThreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionThreePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
