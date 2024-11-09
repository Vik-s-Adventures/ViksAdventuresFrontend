import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneInstructionComponent } from './one-instruction.component';

describe('OneInstructionComponent', () => {
  let component: OneInstructionComponent;
  let fixture: ComponentFixture<OneInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneInstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
