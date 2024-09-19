import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglefontComponent } from './googlefont.component';

describe('GooglefontComponent', () => {
  let component: GooglefontComponent;
  let fixture: ComponentFixture<GooglefontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglefontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GooglefontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
