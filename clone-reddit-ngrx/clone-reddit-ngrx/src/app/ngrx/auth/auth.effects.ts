import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map, tap, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth/auth.service";
import { autoLogin, autoLogout, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/models/AppState.interface";
import { setErrorMessage, setLoadingSpinner } from "../shared/shared.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { createProfileStart, getProfileStart } from "../profile/profie.actions";

// just a service
@Injectable()

export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private authStore: Store<AppState>,
        private profileStore: Store<AppState>,
        private router: Router
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            // se ejecuta esto cuando sea loginStart
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        // * aqui ya recibe la info bien, entonces cambiamos el status de la store
                        this.authStore.dispatch(setLoadingSpinner({status: false}));
                        this.authStore.dispatch(setErrorMessage({message: ''}));


                        // si todo es exitoso, retornar login success
                        // format the user
                        const user = this.authService.formatUser(data);

                        // store user in local storage
                        this.authService.setUserInLocalStorage(user);

                        // ! profile cosa lokaa
                        this.profileStore.dispatch(getProfileStart({id: user.localId}));
                        
                        return loginSuccess({ user: user, redirect: true });
                    }),
                    catchError((errResp) => {
                        this.authStore.dispatch(setLoadingSpinner({status: false}));

                        console.log('response', errResp.error.error.message)
                        const errorMessage = this.authService.getErrorMessage(
                            errResp.error.error.message
                        );
                        // return observable
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        );
    });

    signupStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action) => {
                return this.authService.signup(action.email, action.password).pipe(
                    map((data) => {
                        this.authStore.dispatch(setLoadingSpinner({status: false}));
                        this.authStore.dispatch(setErrorMessage({message: ''}));

                        const user = this.authService.formatUser(data);

                        // store user in local storage
                        this.authService.setUserInLocalStorage(user);

                        // ! profile cosa lokaa
                        this.profileStore.dispatch(createProfileStart({id: user.localId, email: action.email}));

                        // actions para reducers
                        return signupSuccess({user: user, redirect: true})
                    }),
                    catchError((errResp) => {
                        this.authStore.dispatch(setLoadingSpinner({status: false}));

                        console.log('response', errResp.error.error.message)
                        const errorMessage = this.authService.getErrorMessage(
                            errResp.error.error.message
                        );
                        // return observable
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                )
            })
        )
    })

    // no retornarremos ningun observable ni nada
    postsRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(...[loginSuccess, signupSuccess]),
            // * se puede usar map o tap porque no haremos nada con la accion
            
            // tap es cuando no retornar nada y con map si retornas
            tap(action => {
                // si el login es succes te va a mandr a otra vista
                if (action.redirect) {
                    this.router.navigate(['/posts']);
                }
                
            })

        )
        // no va a retornar nada
    }, {dispatch: false})

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogin),
            mergeMap((action) => {
                const user = this.authService.getUserFromLocalStorage();

                 // ! profile cosa lokaa
                this.profileStore.dispatch(getProfileStart({id: user!.localId}));
                    
                return of(loginSuccess({ user: user!, redirect: false }));
            })
        );
    });

    autoLogout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogout),
            map(action => {
                this.authService.logout();
                this.router.navigate(['/'])
            })
        )

    }, {dispatch: false})

}
