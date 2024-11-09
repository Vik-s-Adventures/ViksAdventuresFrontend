import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCounterFooterPageComponent } from './time-counter-footer-page.component';

describe('TimeCounterFooterPageComponent', () => {
  let component: TimeCounterFooterPageComponent;
  let fixture: ComponentFixture<TimeCounterFooterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCounterFooterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeCounterFooterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
