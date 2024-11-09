import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeInstructionComponent } from './level-three-instruction.component';

describe('LevelThreeInstructionComponent', () => {
  let component: LevelThreeInstructionComponent;
  let fixture: ComponentFixture<LevelThreeInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelThreeInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelThreeInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
