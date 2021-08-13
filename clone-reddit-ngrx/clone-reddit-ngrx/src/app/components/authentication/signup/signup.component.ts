import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState.interface';
import { signupStart } from 'src/app/ngrx/auth/auth.actions';
import { setLoadingSpinner } from 'src/app/ngrx/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  signupHandler() {
    console.log('get user', this.signupForm.value);

    const email =  this.signupForm.value.email;
    const password = this.signupForm.value.password;

    // * call the sighnup start and loading spinner
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(signupStart({email, password}))
    
  }

}
