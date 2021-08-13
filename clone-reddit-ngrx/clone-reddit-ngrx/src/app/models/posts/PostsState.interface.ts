import { EntityState } from '@ngrx/entity';
import { Post } from './Post.interface';

export interface PostsState extends EntityState<Post>{
    //posts: Post[];
    //postSelected: Post;
    // * once you add the extends entity state post
    // * you no longer need to specify the elements that
    // * the interface must have

    count: number;
    
}