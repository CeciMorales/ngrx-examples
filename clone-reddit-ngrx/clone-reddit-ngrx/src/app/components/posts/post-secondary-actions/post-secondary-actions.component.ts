import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/AppState.interface';
import { Post } from 'src/app/models/posts/Post.interface';
import { deletePost, getPost } from 'src/app/ngrx/posts/posts.actions';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-post-secondary-actions',
  templateUrl: './post-secondary-actions.component.html',
  styleUrls: ['./post-secondary-actions.component.scss']
})
export class PostSecondaryActionsComponent implements OnInit {

  @Input() post: Post = {
    id: '',
    title: '',
    description: '',
    hashtags: [],
    image: '',
  }

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editPost() {
    const dialogRef = this.dialog.open(PostModalComponent, {
      data: this.post
    });
  }

  deletePost() {
    console.log('delete psot', this.post.id)
    if (confirm("Are you sure you want to delete this post?")) {
      this.store.dispatch(deletePost({id: this.post.id!}))
    }
  }

  viewComments() {
    console.log('get psot id', this.post)
    this.store.dispatch(getPost({ post: this.post }));
    this.router.navigateByUrl(`/posts/details/${this.post.id}`);
    
  }

}
