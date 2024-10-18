import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingLearningThreeComponent } from './checking-learning-three.component';

describe('CheckingLearningThreeComponent', () => {
  let component: CheckingLearningThreeComponent;
  let fixture: ComponentFixture<CheckingLearningThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingLearningThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckingLearningThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
