import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/AppState.interface';
import { Profile } from 'src/app/models/profile/Profile.interface';
import { getProfileInfo } from 'src/app/ngrx/profile/profile.selectors';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html',
  styleUrls: ['./profile-user-info.component.scss']
})
export class ProfileUserInfoComponent implements OnInit {

  profileInfo$: Observable<Profile>;
  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>
  ) { 
    // this.showLoading = this.store.select(getLoading);
    this.profileInfo$ = this.store.select(getProfileInfo);

  }

  ngOnInit(): void {
  }

  editProfile() {
    const dialogRef = this.dialog.open(ProfileModalComponent, {
      data: this.profileInfo$
    })

  

  }

}
