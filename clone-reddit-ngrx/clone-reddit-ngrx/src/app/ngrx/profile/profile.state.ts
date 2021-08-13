import { createEntityAdapter } from "@ngrx/entity";
import { Profile } from 'src/app/models/profile/Profile.interface';
import { ProfileState } from "src/app/models/profile/ProfileState.interface";

export const initialState: ProfileState = {
    profile:  null
}