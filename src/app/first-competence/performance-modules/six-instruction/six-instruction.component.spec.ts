import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixInstructionComponent } from './six-instruction.component';

describe('SixInstructionComponent', () => {
  let component: SixInstructionComponent;
  let fixture: ComponentFixture<SixInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
