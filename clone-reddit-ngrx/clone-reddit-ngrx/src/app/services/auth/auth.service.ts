import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/AppState.interface';
import { AuthResponseData } from 'src/app/models/auth/AuthResponseData.interface';
import { User } from 'src/app/models/auth/User.interface';
import { autoLogout } from 'src/app/ngrx/auth/auth.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timeoutInterval: any;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`, 
      {
        email, 
        password,
        returnSecureToken: true
      }

    );
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      { email, 
        password, 
        returnSecureToken: true 
      }
    );
  }

  setUserInLocalStorage(user: User) {
    // 
    localStorage.setItem('userData', JSON.stringify(user));

    this.runTimeoutInterval(user);

  }


  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData._expirationDate)
      const user = new User(
        userData._email, 
        userData._token, 
        userData._localId, 
        expirationDate
      );
      // run the time interval
      this.runTimeoutInterval(user);
      return user;

    }

    return null;
  }

  runTimeoutInterval(user: User) {
    // after setting the user we need to set the timer
    // adn then autu log out
    const todayDate = new Date().getTime();
    const expirationDate = user.expirationDate.getTime();
    const timeInterval = expirationDate - todayDate;

    this.timeoutInterval = setTimeout(() => {
      // * logout functionality or get refresh token
      this.store.dispatch(autoLogout());

    }, timeInterval)
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }

  getErrorMessage(message: string) {
    switch(message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found';
      
      case 'INVALID_PASSWORD':
        return 'Invalid password';

      case 'EMAIL_EXISTS':
        return 'Email already exists';

      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        return 'Password should be at least 6 characters';

      case 'OPERATION_NOT_ALLOWED:':
        return 'You can´t sign up using password';

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          return 'User blocked due to unusual activity. Try later';

      default:
        return 'Unknown error occurred. Please try again'
    }
  }
}
