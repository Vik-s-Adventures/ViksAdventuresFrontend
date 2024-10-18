import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicThreeComponent } from './topic-three.component';

describe('TopicThreeComponent', () => {
  let component: TopicThreeComponent;
  let fixture: ComponentFixture<TopicThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
