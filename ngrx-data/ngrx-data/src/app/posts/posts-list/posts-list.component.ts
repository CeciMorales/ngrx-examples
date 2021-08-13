import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../post-entity.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(
    private postService: PostService
  ) {
    // get the entities
    this.posts$ = this.postService.entities$;
    
  }

  ngOnInit(): void {

  }

  onDeletePost(event: Event, id: string) {
    event.preventDefault();

    if(confirm(`Are you sure you want to delete post with id ${id}?`)) {
      this.postService.delete(id);
    }



  }



}
