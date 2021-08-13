import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/models/posts/Post.interface";
import { PostsState } from "src/app/models/posts/PostsState.interface";
import { RouterStateUrl } from "src/app/models/RouterStateUrl.interface";
import { getCurrentRoute } from "../router/router.selector";
import { postsAdapter } from "./posts.state";

export const POSTS_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const postsSelectors = postsAdapter.getSelectors();

 // * return state.entities
    // * the format state.posts is no longer valid because 
    // * the new entity format is ids and entities in a object

export const getPosts =  createSelector(
    getPostsState, 
    postsSelectors.selectAll
);

export const getPostEntities = createSelector(
    getPostsState,
    postsSelectors.selectEntities
);

/*
export const getPostSelected = createSelector(getPostsState, (state) => {
    return state.postSelected;
})*/

// TODO: checar si el any se puede cambiar aqui y en post individual.ts
// ! sin el state de route
/*export const getPostById = createSelector(getPostsState, (state: PostsState, props: any) => {
    return state.posts.find(x => x.id === props.id);
})*/

// ! con el state de route 
export const getPostById = createSelector(
    getPostEntities,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
        //return posts ? posts[route.params['id']] : null;
        return posts[route.params['id']]!
    }
);

export const getCount = createSelector(getPostsState, (state) => state.count)

