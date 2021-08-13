import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "src/app/models/auth/AuthState.interface";

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
    //console.log('is auth', state.user)
    return state.user ? true : false;
});

export const getToken = createSelector(getAuthState, state => {
    return state.user ? state.user.token : null;
});

export const getUserId = createSelector(getAuthState, (state) => {
    //return state.user?.email!
    return state.user ? state.user.localId : null;
})