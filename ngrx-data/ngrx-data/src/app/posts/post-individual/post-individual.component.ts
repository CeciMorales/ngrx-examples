import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../post-entity.service';

@Component({
  selector: 'app-post-individual',
  templateUrl: './post-individual.component.html',
  styleUrls: ['./post-individual.component.scss']
})
export class PostIndividualComponent implements OnInit {

  post: Post = {
    title: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    
  ) {
    const id = this.route.snapshot.params['id'];

    this.postService.entities$.subscribe(posts => {
      this.post = posts.find(post => post.id === id)!;
      
    })

  }

  ngOnInit(): void {
  }

}
