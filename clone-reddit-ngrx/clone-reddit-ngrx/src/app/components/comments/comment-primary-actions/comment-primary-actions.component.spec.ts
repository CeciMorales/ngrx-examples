import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPrimaryActionsComponent } from './comment-primary-actions.component';

describe('CommentPrimaryActionsComponent', () => {
  let component: CommentPrimaryActionsComponent;
  let fixture: ComponentFixture<CommentPrimaryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPrimaryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPrimaryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
