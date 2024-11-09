import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentegePracticeTwoComponent } from './percentege-practice-two.component';

describe('PercentegePracticeTwoComponent', () => {
  let component: PercentegePracticeTwoComponent;
  let fixture: ComponentFixture<PercentegePracticeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentegePracticeTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentegePracticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
