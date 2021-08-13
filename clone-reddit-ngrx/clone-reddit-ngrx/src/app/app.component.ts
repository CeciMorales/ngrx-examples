import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './models/AppState.interface';
import { autoLogin } from './ngrx/auth/auth.actions';
import { getErrorMessage, getLoading } from './ngrx/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'clone-reddit-ngrx';
  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    // se ejecutan recien cargue la aplicación
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin());
  }
}
