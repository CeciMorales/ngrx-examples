import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeActionsComponent } from './welcome-actions.component';

describe('WelcomeActionsComponent', () => {
  let component: WelcomeActionsComponent;
  let fixture: ComponentFixture<WelcomeActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
