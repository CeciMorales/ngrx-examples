import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { PostState } from '../../interfaces/PostState.interface';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts/Post.interface';
import { map } from 'rxjs/operators';
import { PostDashboardComponent } from 'src/app/components/posts/post-dashboard/post-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //URL_API_POSTS = 'https://clone-reddit-ngrx-default-rtdb.firebaseio.com/';
  URL_API_POSTS = 'http://localhost:3000/posts';

  constructor(
    private http: HttpClient,
  ) { }
  
  getPosts(): Observable<Post[]> {
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

  addPost(post: Post) {
    return this.http.post(this.URL_API_POSTS, post);
  }

  /**
   * 
   *  addPost(post: Post): Observable<{name: string}> {
    return this.http.post<{name: string}>(this.URL_API_POSTS+'posts.json', post)
    }
   */

  updatePost(post: Post) {
    // console.log('id post', post.id)
    /*const postData = {
      [post.id!]: {
        title: post.title,
        hashtags: post.hashtags,
        description: post.description,
        image: post.image,
        id: post.id,
        author: post.author,
        likes: post.likes,
        dislikes: post.dislikes,
        comments: post.comments,
        creationDate: post.creationDate
      }
    }*/
  
    //console.log(postData, 'put service posts')
    
    return this.http.put(`${this.URL_API_POSTS}/${post.id}`, post);
  }  

  deletePost(id: string) {
    return this.http.delete(`${this.URL_API_POSTS}/${id}`);
  }

  getPost(id: string): Observable<Post> {
    
    return this.http.get<Post>(`${this.URL_API_POSTS}/${id}`)
    
  }
}
