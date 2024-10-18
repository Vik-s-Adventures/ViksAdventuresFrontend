import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingLearningTwoComponent } from './checking-learning-two.component';

describe('CheckingLearningTwoComponent', () => {
  let component: CheckingLearningTwoComponent;
  let fixture: ComponentFixture<CheckingLearningTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingLearningTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckingLearningTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
