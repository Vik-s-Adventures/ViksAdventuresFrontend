import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentegePracticeOneComponent } from './percentege-practice-one.component';

describe('PercentegePracticeOneComponent', () => {
  let component: PercentegePracticeOneComponent;
  let fixture: ComponentFixture<PercentegePracticeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentegePracticeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentegePracticeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
