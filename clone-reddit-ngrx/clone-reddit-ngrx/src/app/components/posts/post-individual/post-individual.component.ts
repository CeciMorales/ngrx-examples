import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/models/AppState.interface';
import { Post } from 'src/app/models/posts/Post.interface';
import { getPostById } from 'src/app/ngrx/posts/posts.selectors';
// import { getPostById } from 'src/app/ngrx/posts/posts.selectors';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post-individual',
  templateUrl: './post-individual.component.html',
  styleUrls: ['./post-individual.component.scss']
})
export class PostIndividualComponent implements OnInit {

  post: Post = {
    id: '',
    title: '',
    hashtags: [],
    description: '',
    image: '',
    author: '', 
    likes: [],
    dislikes: [],
    comments: [],
    creationDate: undefined
  }

  post$: Observable<Post>;

  postSubscription: Subscription;

  // post: any;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private postsService: PostService
  ) { 
    this.postSubscription = new Subscription();
    /*this.postSubscription = this.store.select(getPostSelected).subscribe(post => {
      this.post = post;
      console.log('post individual', this.post)
    })*/

    /*this.route.paramMap.subscribe((params) => {
      const idPost = params.get('id');
      console.log('id params', idPost);
      this.postsService.getPost(idPost!).subscribe((post) => {
        this.post = post
        } 
      );
    })*/
    //this.post$ = this.store.select(getPostById);
    this.post$ = this.store.select(getPostById);
  }

  ngOnInit(): void {
    // get the id from the store, not from the activated route
    // si no te suscribees, no obtienes data
    /*this.postSubscription = this.store.select(getPostById).subscribe(post => {
      console.log('posts', post)
      if (post) {
        this.post = post!;
      }
      
    });*/

    /*this.route.paramMap.subscribe((params) => {
      const idPost = params.get('id');
      this.store.select(getPostById, {id: idPost}).subscribe((data) => {
        // ts trust you that it will not be null
        this.post = data!
      })
      
    })*/

    
    

    
  }

}
