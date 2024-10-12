import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveInstructionComponent } from './five-instruction.component';

describe('FiveInstructionComponent', () => {
  let component: FiveInstructionComponent;
  let fixture: ComponentFixture<FiveInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiveInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
