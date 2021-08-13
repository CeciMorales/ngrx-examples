import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from "@ngrx/entity";
import {
    RouterNavigatedAction,
    routerNavigationAction,
    ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { Store } from "@ngrx/store";
import { filter, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { AppState } from "src/app/models/AppState.interface";
import { Post } from "src/app/models/posts/Post.interface";
import { PostService } from "src/app/services/post/post.service";
import { addPost, addPostSuccess, deletePost, deletePostSuccess, dummyAction, getPost, getPostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions";
import { getPosts } from 'src/app/ngrx/posts/posts.selectors';
import { of } from "rxjs";


@Injectable()
export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postService: PostService,
        private store: Store<AppState>
    ) {}

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            withLatestFrom(this.store.select(getPosts)),

            mergeMap(([action, post]) => {
                // si solo hay uno, tal vez venga de los details
                if (!post.length || post.length === 1) {

                    return this.postService.getPosts().pipe(
                        map((posts) => {
                            return loadPostsSuccess({posts})
                        })
                    );

                }

                return of(dummyAction());
                
            })
        );
    });

    addPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPost),
            mergeMap((action) => {
                return this.postService.addPost(action.post).pipe(
                    map((data) => {
                        // data is the name
                        //console.log("DATA QUE RECIBE DE SERVICE", data);
                        const post = {...data} as Post
                        //console.log('post de effect', post)
                        return addPostSuccess({post})
                    })
                );
            })
        );
    });

    updatePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePost),
            switchMap((action) => {
                return this.postService.updatePost(action.post).pipe(
                    map((data) => {
                        const updatedPost: Update<Post> = {
                            id: action.post.id!,
                            changes: {
                                ...action.post
                            }
                        }
                        //console.log('data success de update', data)
                        return updatePostSuccess({ post: updatedPost })
                    })
                );
            })

        )
    });

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePost),
            switchMap((action) => {
                return this.postService.deletePost(action.id).pipe(
                    map((data) => {
                        //console.log('data success delete', data)
                        return deletePostSuccess({ id: action.id })
                    })
                );
            })

        )
    });

    /*getPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPost),
            switchMap((action) => {
                return this.postService.getPost(action.post.id!).pipe(
                    map((data) => {
                        console.log('success get data', data)
                        return getPostSuccess({post: data})
                    })
                )
            })
        )
    })*/

    getSinglePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter((r: RouterNavigatedAction) => {
                //console.log('cosa de router rara -> ', r.payload.routerState.url.startsWith('/posts/details'))
                return r.payload.routerState.url.startsWith('/posts/details');
            }),

            map((r: RouterNavigatedAction) => {
                //console.log('cosa mas rara router ->', r.payload.routerState)
                const id = Object.values(r.payload.routerState)[1].id;
                //console.log('id ahhh', id)
                return id
            }),

            // i have the id and i have to check if the post is present
            withLatestFrom(this.store.select(getPosts)),

            switchMap(([id, posts]) => {
                // we don't have to do the http call because we already have the posts in the store
                if (!posts.length) {
                    // si no está presente si haz la llamada http
                    return this.postService.getPost(id).pipe(
                        map((post) => {
                            const postData = [{ ...post, id }];
                            return loadPostsSuccess({ posts: postData  });
                        })
                    );
                }

                // expecting observable
                return of(dummyAction())
            })
            /*
            ,
            
            */
        );
    });

}