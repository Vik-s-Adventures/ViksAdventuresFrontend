import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourInstructionComponent } from './four-instruction.component';

describe('FourInstructionComponent', () => {
  let component: FourInstructionComponent;
  let fixture: ComponentFixture<FourInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
