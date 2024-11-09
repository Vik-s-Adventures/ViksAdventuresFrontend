import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelFiveInstructionComponent } from './level-five-instruction.component';

describe('LevelFiveInstructionComponent', () => {
  let component: LevelFiveInstructionComponent;
  let fixture: ComponentFixture<LevelFiveInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelFiveInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelFiveInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
