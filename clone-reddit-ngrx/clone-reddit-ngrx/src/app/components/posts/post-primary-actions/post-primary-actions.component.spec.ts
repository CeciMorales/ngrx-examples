import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPrimaryActionsComponent } from './post-primary-actions.component';

describe('PostPrimaryActionsComponent', () => {
  let component: PostPrimaryActionsComponent;
  let fixture: ComponentFixture<PostPrimaryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPrimaryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPrimaryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
