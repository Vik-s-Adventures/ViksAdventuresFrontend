import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaspriteComponent } from './pruebasprite.component';

describe('PruebaspriteComponent', () => {
  let component: PruebaspriteComponent;
  let fixture: ComponentFixture<PruebaspriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaspriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebaspriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
