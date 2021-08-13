import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserContactsComponent } from './profile-user-contacts.component';

describe('ProfileUserContactsComponent', () => {
  let component: ProfileUserContactsComponent;
  let fixture: ComponentFixture<ProfileUserContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
