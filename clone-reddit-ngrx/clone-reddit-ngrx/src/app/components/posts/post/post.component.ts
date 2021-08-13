import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts/Post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
