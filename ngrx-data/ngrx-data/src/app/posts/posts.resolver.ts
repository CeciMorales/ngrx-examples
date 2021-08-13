import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { first, map, mergeMap, tap } from "rxjs/operators";
import { PostService } from "./post-entity.service";

@Injectable()
export class PostsResolver implements Resolve<boolean> {
   
    constructor(
        private postService: PostService
    ) {}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this.postService.loaded$.pipe(
            // check if it is loaded
            /* // ! one way of doing it...
            mergeMap((loaded) => {

                if (loaded) {
                          // cannot directly send true of false
                // must retur observable of false or true with OF operator
                    // si esta loaded, no need to retrieve the data from http
                    return of(true);
                }

                return this.postService.getAll().pipe(map(posts => {
                    return !!posts
                }))
            }), 
            // at least we have to wait one observable
            first()*/

            // ! another way of doing it, better!
            // return true or false
            tap(loaded => {
                if (!loaded) {
                    this.postService.getAll();
                }
            }),
            first()
        );
    }

}