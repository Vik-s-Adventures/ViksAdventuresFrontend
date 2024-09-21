import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebainitComponent } from './pruebainit.component';

describe('PruebainitComponent', () => {
  let component: PruebainitComponent;
  let fixture: ComponentFixture<PruebainitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebainitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebainitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
