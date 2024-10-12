import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFourInstructionComponent } from './level-four-instruction.component';

describe('LevelFourInstructionComponent', () => {
  let component: LevelFourInstructionComponent;
  let fixture: ComponentFixture<LevelFourInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelFourInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelFourInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
