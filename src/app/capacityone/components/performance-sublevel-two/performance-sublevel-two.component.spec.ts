import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSublevelTwoComponent } from './performance-sublevel-two.component';

describe('PerformanceSublevelTwoComponent', () => {
  let component: PerformanceSublevelTwoComponent;
  let fixture: ComponentFixture<PerformanceSublevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceSublevelTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceSublevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
