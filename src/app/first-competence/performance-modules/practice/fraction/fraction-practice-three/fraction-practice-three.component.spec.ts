import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionPracticeThreeComponent } from './fraction-practice-three.component';

describe('FractionPracticeThreeComponent', () => {
  let component: FractionPracticeThreeComponent;
  let fixture: ComponentFixture<FractionPracticeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionPracticeThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FractionPracticeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
