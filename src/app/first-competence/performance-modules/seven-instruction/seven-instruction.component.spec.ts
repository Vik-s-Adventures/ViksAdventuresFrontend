import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenInstructionComponent } from './seven-instruction.component';

describe('SevenInstructionComponent', () => {
  let component: SevenInstructionComponent;
  let fixture: ComponentFixture<SevenInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevenInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
