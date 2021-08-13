import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProfileState } from "src/app/models/profile/ProfileState.interface";

export const PROFILE_STATE_NAME = 'profile';

const getProfileState = createFeatureSelector<ProfileState>(PROFILE_STATE_NAME);

export const getProfileId = createSelector(getProfileState, (state) => {
    return state.profile?.id;
})

export const getProfileInfo = createSelector(getProfileState, (state) => {
    return state.profile!
})

export const getProfileUsername = createSelector(getProfileState, (state: any, props: string) => {
    return state.profile?.id === props ? state.profile.username : null
})