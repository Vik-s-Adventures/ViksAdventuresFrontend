import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFourComponent } from './topic-four.component';

describe('TopicFourComponent', () => {
  let component: TopicFourComponent;
  let fixture: ComponentFixture<TopicFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
