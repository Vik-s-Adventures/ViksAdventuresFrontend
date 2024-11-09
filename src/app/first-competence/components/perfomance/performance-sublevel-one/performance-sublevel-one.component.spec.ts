import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSublevelOneComponent } from './performance-sublevel-one.component';

describe('PerformanceSublevelOneComponent', () => {
  let component: PerformanceSublevelOneComponent;
  let fixture: ComponentFixture<PerformanceSublevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceSublevelOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceSublevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
