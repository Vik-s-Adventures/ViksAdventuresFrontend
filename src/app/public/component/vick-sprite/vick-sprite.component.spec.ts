import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VickSpriteComponent } from './vick-sprite.component';

describe('VickSpriteComponent', () => {
  let component: VickSpriteComponent;
  let fixture: ComponentFixture<VickSpriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VickSpriteComponent]
    });
    fixture = TestBed.createComponent(VickSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
