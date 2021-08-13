import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from 'src/app/models/profile/Profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  URL_API_PROFILE = 'http://localhost:3000/profiles';


  newProfile: Profile = {
    id: '',
    type: '',
    firstName: '',
    lastName: '',
    username: '',
    description: '',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCwy-0RHLsWWOuC1INPGwHsWjvwbzwAANLSiuieHvRHqyNLR8ascGumCmiS18Rp_bBIY&usqp=CAU',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1YqGmmqsmuUUZwRKsC05bBysXjlIgl38Gw&usqp=CAU',
    followers: [],
    following: [],
    savedPosts: []

  }

  constructor(
    private http: HttpClient
  ) { }

  createProfile(id: string, email: string) {
    this.newProfile.id = id;
    this.newProfile.username = email.substr(0, email.indexOf('@')) + id;
    console.log('entró al service', this.newProfile)

    return this.http.post<Profile>(this.URL_API_PROFILE, this.newProfile);

  }

  getProfile(id: string) {
    return this.http.get<Profile>(`${this.URL_API_PROFILE}/${id}`);
  }

  updateProfile(updatedProfile: Profile) {

  }
}
