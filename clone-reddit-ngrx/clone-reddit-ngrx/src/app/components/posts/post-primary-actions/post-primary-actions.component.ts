import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts/Post.interface';

@Component({
  selector: 'app-post-primary-actions',
  templateUrl: './post-primary-actions.component.html',
  styleUrls: ['./post-primary-actions.component.scss']
})
export class PostPrimaryActionsComponent implements OnInit {

  @Input() post: Post = {
    id: '',
    title: '',
    description: '',
    hashtags: [],
    image: '',
    likes: [],
    dislikes: []
  }
  constructor() { }

  ngOnInit(): void {
  }

  upwardHandler() {
    console.log('up', this.post.id);

  }

  downwardHandler() {
  console.log('down', this.post.id);

  }

}
