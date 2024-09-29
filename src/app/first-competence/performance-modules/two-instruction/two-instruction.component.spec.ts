import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoInstructionComponent } from './two-instruction.component';

describe('TwoInstructionComponent', () => {
  let component: TwoInstructionComponent;
  let fixture: ComponentFixture<TwoInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
