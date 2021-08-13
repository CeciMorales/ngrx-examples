import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map, tap, mergeMap, exhaust } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { ProfileService } from "src/app/services/profile/profile.service";
import { AppState } from "src/app/models/AppState.interface";
import { createProfileFail, createProfileStart, createProfileSuccess, CREATE_PROFILE_FAIL, getProfileStart, getProfileSuccess } from "./profie.actions";
import { Profile } from "src/app/models/profile/Profile.interface";

@Injectable()

export class ProfileEffects{
    
    constructor(
        private actions$: Actions,
        private profileService: ProfileService, 
        private profileStore: Store<AppState>,
    ) {}

    createProfileStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createProfileStart),
            exhaustMap((action) => {
                return this.profileService.createProfile(action.id, action.email).pipe(
                    map((data) => {
                        console.log('successfull', data)
                        return createProfileSuccess({profile: data})
                    })
                )
            }
        ))
    });

    getProfileStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getProfileStart),
            exhaustMap((action) => {
                return this.profileService.getProfile(action.id).pipe(
                    map((data) => {
                        console.log('data de login', data);
                        return getProfileSuccess({profile: data});
                    })
                )
            })

        )
    })

    
}