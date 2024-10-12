import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSevenInstructionComponent } from './level-seven-instruction.component';

describe('LevelSevenInstructionComponent', () => {
  let component: LevelSevenInstructionComponent;
  let fixture: ComponentFixture<LevelSevenInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelSevenInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelSevenInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
