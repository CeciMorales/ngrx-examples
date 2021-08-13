import { RouterReducerState } from '@ngrx/router-store';
import { AUTH_STATE_NAME } from '../ngrx/auth/auth.selectors';
import { SHARED_STATE_NAME } from '../ngrx/shared/shared.selector';
import { AuthState } from './auth/AuthState.interface';
import { PostsState } from './posts/PostsState.interface';
import { SharedState } from './SharedState.interface';

// states que son globales para la apliación y son for root
// pero para for features son los que son especiales a un modulo
export interface AppState {
    //posts: PostsState
    [SHARED_STATE_NAME]: SharedState;
    [AUTH_STATE_NAME]: AuthState;
    router: RouterReducerState

}