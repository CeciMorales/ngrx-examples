import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/AppState.interface';
import { Post } from 'src/app/models/posts/Post.interface';
import { loadPosts } from 'src/app/ngrx/posts/posts.actions';
import { getCount, getPosts } from 'src/app/ngrx/posts/posts.selectors';
import { PostService } from '../../../services/post/post.service';
//import { PostState } from '../../../interfaces/PostState.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  //posts: PostState[] = [];
  posts$: Observable<Post[]> = new Observable;
  count$: Observable<number>;

  constructor(
    private postService: PostService,
    private store: Store<AppState>
  ) { 
    this.count$ = this.store.select(getCount)
  }

  ngOnInit(): void {
    //this.getPosts();
    this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }

  /*
  getPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
      console.log("posts", this.posts);
    })
  }
  */

}
