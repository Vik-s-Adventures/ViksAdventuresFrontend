import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTwoComponent } from './topic-two.component';

describe('TopicTwoComponent', () => {
  let component: TopicTwoComponent;
  let fixture: ComponentFixture<TopicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
