import { initialState, postsAdapter } from './posts.state';
import { Action, createReducer, on } from '@ngrx/store';
import { 
    addPost, 
    addPostSuccess, 
    deletePost, 
    deletePostSuccess, 
    getPosts, 
    loadPostsSuccess, 
    updatePost, 
    updatePostSuccess,
    getPostSuccess 
} from './posts.actions';

const _postsReducer = createReducer(
    initialState,
    // action son los argumentos
    on(addPostSuccess, (state, action) => {
        // * how to update extra data we added

        return postsAdapter.addOne(action.post,
            {
                ...state,
                count: state.count +1
            }
        );
    }),

    on(updatePostSuccess, (state, action) => {  
        return postsAdapter.updateOne(action.post, state);
    }),

    on(deletePostSuccess, (state, action) => {
        return postsAdapter.removeOne(action.id, state);
    }),
    /*
    on(getPostSuccess, (state, action) => {
        return {
            ...state,
            postSelected: action.post
        }
    }),
    */

    on(loadPostsSuccess, (state, action) => {
        // set all, replace current collection with the new one
        return postsAdapter.setAll(action.posts, state);
    }),
);

export function postsReducer(state = initialState, action: Action) {
    return _postsReducer(state, action);
}