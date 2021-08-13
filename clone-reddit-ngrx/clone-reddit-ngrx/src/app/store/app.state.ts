import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../models/AppState.interface';
import { AuthReducer } from '../ngrx/auth/auth.reducer';
import { AUTH_STATE_NAME } from '../ngrx/auth/auth.selectors';
import { postsReducer } from '../ngrx/posts/posts.reducer';
import { ProfileReducer } from '../ngrx/profile/profile.reducer';
import { PROFILE_STATE_NAME } from '../ngrx/profile/profile.selectors';
import { SharedReducer } from '../ngrx/shared/shared.reducer';
import { SHARED_STATE_NAME } from '../ngrx/shared/shared.selector';

export const appReducer = {
    //posts: postsReducer
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer,
    [PROFILE_STATE_NAME]: ProfileReducer,
    router: routerReducer
}