import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicOneComponent } from './topic-one.component';

describe('TopicOneComponent', () => {
  let component: TopicOneComponent;
  let fixture: ComponentFixture<TopicOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
