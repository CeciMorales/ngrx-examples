import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post-entity.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  editPostForm: FormGroup;
  id: string;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null)
    })

    this.id = this.route.snapshot.params['id'];

    this.postService.entities$.subscribe(posts => {
      const post = posts.find(post => post.id === this.id);
      
      if (posts.length) {
        this.editPostForm.patchValue({
          title: post?.title,
          description: post?.description
  
        })
      }
    })
  }

  ngOnInit(): void {
  }

  onEditPost() {
    const postData = {
      ...this.editPostForm.value,
      id: this.id
    }

    this.postService.update(postData).subscribe(data => {
      this.router.navigate(['/posts']);
    })
  }
}
