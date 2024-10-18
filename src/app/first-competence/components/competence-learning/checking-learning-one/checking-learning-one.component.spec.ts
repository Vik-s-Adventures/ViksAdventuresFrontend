import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingLearningOneComponent } from './checking-learning-one.component';

describe('CheckingLearningOneComponent', () => {
  let component: CheckingLearningOneComponent;
  let fixture: ComponentFixture<CheckingLearningOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingLearningOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckingLearningOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
