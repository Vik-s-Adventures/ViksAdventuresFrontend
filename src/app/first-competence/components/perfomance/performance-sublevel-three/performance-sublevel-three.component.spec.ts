import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSublevelThreeComponent } from './performance-sublevel-three.component';

describe('PerformanceSublevelThreeComponent', () => {
  let component: PerformanceSublevelThreeComponent;
  let fixture: ComponentFixture<PerformanceSublevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceSublevelThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceSublevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
