import { Action, createReducer, on } from "@ngrx/store";
import { autoLogout, loginSuccess, signupSuccess } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(
    initialState,

    on(loginSuccess, (state, action) => {
        //console.log('loginsuccess reducer', action.user, action)
        return {
            ...state,
            user: action.user
        }
    }),

    on(signupSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),

    on(autoLogout, state => {
        return {
            ...state, 
            user: null
        }
    })
);

export function AuthReducer(state = initialState, action: Action) {
    return _authReducer(state, action);
}