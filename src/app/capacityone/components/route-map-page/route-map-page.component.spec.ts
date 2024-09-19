import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMapPageComponent } from './route-map-page.component';

describe('RouteMapPageComponent', () => {
  let component: RouteMapPageComponent;
  let fixture: ComponentFixture<RouteMapPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouteMapPageComponent]
    });
    fixture = TestBed.createComponent(RouteMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
