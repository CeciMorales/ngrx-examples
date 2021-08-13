import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDashboardPrimaryActionsComponent } from './posts-dashboard-primary-actions.component';

describe('PostsDashboardPrimaryActionsComponent', () => {
  let component: PostsDashboardPrimaryActionsComponent;
  let fixture: ComponentFixture<PostsDashboardPrimaryActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDashboardPrimaryActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDashboardPrimaryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
