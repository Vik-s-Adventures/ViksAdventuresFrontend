import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionPracticeTwoComponent } from './fraction-practice-two.component';

describe('FractionPracticeTwoComponent', () => {
  let component: FractionPracticeTwoComponent;
  let fixture: ComponentFixture<FractionPracticeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionPracticeTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FractionPracticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
