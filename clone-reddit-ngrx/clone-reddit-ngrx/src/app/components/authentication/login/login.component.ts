import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState.interface';
import { loginStart } from 'src/app/ngrx/auth/auth.actions';
import { setLoadingSpinner } from 'src/app/ngrx/shared/shared.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginHandler() {
    console.log('get user', this.loginForm.value);
    const email =  this.loginForm.value.email;
    const password = this.loginForm.value.password;
    // * el el dispatch se lla la acción que quieres junto con los datos
    // * desde aqui es donde inicia todo el proceso de auth, entonces pones status de setloading a true
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart({email, password}))

  }


}
