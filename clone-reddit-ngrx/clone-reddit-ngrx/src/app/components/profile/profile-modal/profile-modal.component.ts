import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/AppState.interface';
import { Profile } from 'src/app/models/profile/Profile.interface';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  editedProfile: Profile = {
    id: '',
    type: '',
    username: '',
    firstName: '',
    lastName: '',
    coverImage: '',
    profileImage: '',
    description: '',
    followers: [],
    following: [],
    savedPosts: []
  }

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    coverImage: new FormControl('', Validators.required),
    profileImage: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public profile: Observable<Profile>,
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<ProfileModalComponent>,
    private store: Store<AppState>
  ) { 
    profile.subscribe((data) => {
      this.editedProfile = data;
    })
  }

  ngOnInit(): void {
  }

  editProfile(){
    console.log('edited user:', this.profileForm.value);

  }

}
