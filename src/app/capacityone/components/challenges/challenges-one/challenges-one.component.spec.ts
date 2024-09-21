import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesOneComponent } from './challenges-one.component';

describe('ChallengesOneComponent', () => {
  let component: ChallengesOneComponent;
  let fixture: ComponentFixture<ChallengesOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengesOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengesOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
