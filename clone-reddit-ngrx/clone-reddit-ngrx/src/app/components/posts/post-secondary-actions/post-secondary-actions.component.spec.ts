import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSecondaryActionsComponent } from './post-secondary-actions.component';

describe('PostSecondaryActionsComponent', () => {
  let component: PostSecondaryActionsComponent;
  let fixture: ComponentFixture<PostSecondaryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSecondaryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSecondaryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
