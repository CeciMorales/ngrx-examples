import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/AppState.interface';
import { Post } from 'src/app/models/posts/Post.interface';
import { getUserId } from 'src/app/ngrx/auth/auth.selectors';
import { addPost, updatePost } from 'src/app/ngrx/posts/posts.actions';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    hashtags: new FormControl([]),
    image: new FormControl('')
  });

  newPost: Post = {
    id: '',
    title: '',
    description: '',
    hashtags: [],
    image: '',
    author: '',
    likes: [],
    dislikes: [],
    comments: [],
    creationDate: undefined
  }

  editedPost: Post = {
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public post: Post,
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<PostModalComponent>,
    private store: Store<AppState>

  ) {
    if (post) {
      this.editedPost = post;
      console.log('edited post porque si hay post', this.editedPost);
    }

  }

  ngOnInit(): void {
  }

  addPost() {
    
    if (this.postForm.value.hashtags.length !== 0) {
      this.postForm.value.hashtags = this.postForm.value.hashtags.split(/[ ,]+/);
      this.newPost.hashtags = this.postForm.value.hashtags;
    }
    console.log(this.postForm.value);
    
    // values to add to the newPost var
    // TODO: loopear por los valores que manda el forms
    this.newPost.title = this.postForm.value.title;
    this.newPost.description = this.postForm.value.description;
    this.newPost.image = this.postForm.value.image;
    this.newPost.creationDate = new Date();
    //this.newPost.author = this.store.select(getUser)
    this.store.select(getUserId).subscribe((data) => {
      this.newPost.author = data!
    })
    console.log(this.newPost.author, 'autor logeado')
    

    console.log('new post', this.newPost)
    this.store.dispatch(addPost({ post: this.newPost }));
    
  }

  editPost() {
    console.log('que onda', this.editedPost.id);
  
    if (this.postForm.value.hashtags.length !== 0) {
      this.postForm.value.hashtags = this.postForm.value.hashtags.split(/[ ,]+/);
      let hashtags = this.postForm.value.hashtags;
      this.editedPost = {...this.editedPost, hashtags}      
    }

    // TODO: loopear por los valores que manda el forms
    let title = this.postForm.value.title;
    let description = this.postForm.value.description;
    let image = this.postForm.value.image;

    this.editedPost = {...this.editedPost, title, description, image}

    console.log('edited post ahh desde el MODAL', this.editedPost, this.editedPost.id)

    this.store.dispatch(updatePost({post: this.editedPost}));
  

  }

}
