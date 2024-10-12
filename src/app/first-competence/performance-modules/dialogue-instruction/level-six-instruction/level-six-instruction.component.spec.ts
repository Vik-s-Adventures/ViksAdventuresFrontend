import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSixInstructionComponent } from './level-six-instruction.component';

describe('LevelSixInstructionComponent', () => {
  let component: LevelSixInstructionComponent;
  let fixture: ComponentFixture<LevelSixInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelSixInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelSixInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
