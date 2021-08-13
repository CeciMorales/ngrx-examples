import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from '../post-entity.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  addPostForm: FormGroup;

  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.addPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onAddPost() {
    const post: Post = this.addPostForm.value;
    this.postService.add(post).subscribe(data => {
      console.log('data de post success', data);
      this.router.navigate(['/posts']);
    });

  }

}
