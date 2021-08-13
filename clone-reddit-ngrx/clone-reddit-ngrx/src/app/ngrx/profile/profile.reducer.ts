import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "../posts/posts.state";
import { createProfileSuccess, createProfileFail, getProfileSuccess, getProfileFail } from "./profie.actions";

const _profileReducer = createReducer(
    initialState,

    on(createProfileSuccess, (state, action) => {
        return {
            ...state, 
            profile: action.profile
        }
    }),

    on(createProfileFail, (state, action) => {
        return {
            ...state, 
            profile: null
        }
    }),

    on(getProfileSuccess, (state, action) => {
        return {
            ...state, 
            profile: action.profile
        }
    }),

    on(getProfileFail, (state, action) => {
        return {
            ...state, 
            profile: null
        }
    }),
);

export function ProfileReducer(state = initialState, action: Action) {
    return _profileReducer(state, action);
}