import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/models/RouterStateUrl.interface";

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router')

export const getCurrentRoute = createSelector(getRouterState, (router) => {
    return router.state;
})