import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesTwoComponent } from './challenges-two.component';

describe('ChallengesTwoComponent', () => {
  let component: ChallengesTwoComponent;
  let fixture: ComponentFixture<ChallengesTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengesTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
