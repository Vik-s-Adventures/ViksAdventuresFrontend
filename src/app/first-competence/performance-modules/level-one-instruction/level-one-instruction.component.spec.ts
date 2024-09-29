import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOneInstructionComponent } from './level-one-instruction.component';

describe('LevelOneInstructionComponent', () => {
  let component: LevelOneInstructionComponent;
  let fixture: ComponentFixture<LevelOneInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelOneInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelOneInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
