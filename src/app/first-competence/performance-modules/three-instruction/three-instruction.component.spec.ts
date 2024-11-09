import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeInstructionComponent } from './three-instruction.component';

describe('ThreeInstructionComponent', () => {
  let component: ThreeInstructionComponent;
  let fixture: ComponentFixture<ThreeInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
