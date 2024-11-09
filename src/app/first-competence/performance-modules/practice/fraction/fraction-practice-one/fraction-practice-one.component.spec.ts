import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionPracticeOneComponent } from './fraction-practice-one.component';

describe('FractionPracticeOneComponent', () => {
  let component: FractionPracticeOneComponent;
  let fixture: ComponentFixture<FractionPracticeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionPracticeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FractionPracticeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
