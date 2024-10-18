import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTopicsInstructionComponent } from './all-topics-instruction.component';

describe('AllTopicsInstructionComponent', () => {
  let component: AllTopicsInstructionComponent;
  let fixture: ComponentFixture<AllTopicsInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTopicsInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTopicsInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
