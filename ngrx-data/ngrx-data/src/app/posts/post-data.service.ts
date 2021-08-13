import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { map } from 'rxjs/operators';
import { Update } from "@ngrx/entity";

@Injectable()
export class PostDataService extends DefaultDataService<Post> {

    URL_API_POSTS = 'http://localhost:3000/posts';

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator
    ) {
        super('Post', http, httpUrlGenerator)
    }
    
    getAll(): Observable<Post[]> {
        return this.http.get(this.URL_API_POSTS)
        .pipe(map(data => {
            const posts: Post[] = [];
            const dataPosts = Object.values(data);
            for (let key in dataPosts) {
            posts.push({ ...dataPosts[key] })
            // dataPosts[key].id
            }
            return posts;
        }));
        
        
    }
    
    // we are overriding the methods of base
    add(post: Post): Observable<Post>{
        return this.http.post(this.URL_API_POSTS, post)
        .pipe(map(data => {
            // get the id
            let id = Object.values(data)[2]
            return {...post, id: id}
        }))
    }

    update(post: Update<Post>): Observable<Post> {
        return this.http.put<Post>(`${this.URL_API_POSTS}/${post.id}`, {...post.changes})
        
    }

    delete(id: string): Observable<string> {
        return this.http.delete(`${this.URL_API_POSTS}/${id}`)
        .pipe(map(data => {
            return id;
        }));


    }

    

}