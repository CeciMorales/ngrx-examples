import { createAction, props } from "@ngrx/store";
import { Profile } from "src/app/models/profile/Profile.interface";

export const GET_PROFILE_START = '[auth page] get profile start';
export const GET_PROFILE_SUCCESS = '[auth page] get profile success';
export const GET_PROFILE_FAIL = '[auth page] get profile fail';

export const CREATE_PROFILE_START = '[auth page] create profile start';
export const CREATE_PROFILE_SUCCESS = '[auth page] create profile success';
export const CREATE_PROFILE_FAIL = '[auth page] create profile fail';

export const AUTO_GET_PROFILE_ACTION = '[auth page] auto get profile';
export const AUTO_REM_PROFILE_ACTION = '[auth page] auto remove profile';

export const createProfileStart = createAction(
    CREATE_PROFILE_START,
    props<{id: string, email: string}>()
);

export const createProfileSuccess = createAction(
    CREATE_PROFILE_SUCCESS,
    props<{profile: Profile}>()
);

export const createProfileFail = createAction(
    CREATE_PROFILE_FAIL
);

export const getProfileStart = createAction(
    GET_PROFILE_START,
    props<{id: string}>()
);

export const getProfileSuccess = createAction(
    GET_PROFILE_SUCCESS,
    props<{profile: Profile}>()
);

export const getProfileFail = createAction(
    GET_PROFILE_FAIL
);

export const removeProfileStart = createAction(
    AUTO_REM_PROFILE_ACTION
)


