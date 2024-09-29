import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTwoInstructionComponent } from './level-two-instruction.component';

describe('LevelTwoInstructionComponent', () => {
  let component: LevelTwoInstructionComponent;
  let fixture: ComponentFixture<LevelTwoInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelTwoInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelTwoInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
