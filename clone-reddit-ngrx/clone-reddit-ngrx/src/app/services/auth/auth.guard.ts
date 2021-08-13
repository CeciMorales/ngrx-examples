import { Injectable } from '@angular/core';
import { 
    ActivatedRouteSnapshot, 
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaust, map } from 'rxjs/operators';
import { AppState } from 'src/app/models/AppState.interface';
import { isAuthenticated } from 'src/app/ngrx/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store<AppState>,
        private router: Router
    ) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
        return this.store.select(isAuthenticated).pipe(
            map((authenticate => {
                if (!authenticate) {
                    return this.router.createUrlTree(['auth'])
                }
                // si es true significa que puede pasar al componente
                return true
            
            }))
        );
    }
}