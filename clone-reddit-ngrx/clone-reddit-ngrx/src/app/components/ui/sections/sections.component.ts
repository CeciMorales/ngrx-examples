import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/models/AppState.interface';
import { autoLogout } from 'src/app/ngrx/auth/auth.actions';
import { isAuthenticated } from 'src/app/ngrx/auth/auth.selectors';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  isAuthenticated!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  logoutHandler(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout())
    this.router.navigate(['/']);
    
    
  }

}
