import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getToken } from 'src/app/ngrx/auth/auth.selectors';
import { exhaustMap, take } from 'rxjs/operators';
import { AppState } from 'src/app/models/AppState.interface';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

    constructor (
        private store: Store<AppState>
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // get the token
        return this.store.select(getToken).pipe(
            take(1),
            exhaustMap((token) => {
                if (!token) {
                    return next.handle(req);
                }

                let modifiedReq = req.clone({
                    params: req.params.append('auth', token)
                });

                return next.handle(modifiedReq);
            })
        )
    }
}