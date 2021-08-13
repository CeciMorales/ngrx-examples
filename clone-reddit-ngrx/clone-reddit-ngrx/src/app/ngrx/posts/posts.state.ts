import { createEntityAdapter } from '@ngrx/entity';
import { Post } from 'src/app/models/posts/Post.interface';
import { User } from 'src/app/models/auth/User.interface';
import { PostsState } from '../../models/posts/PostsState.interface';

export const postsAdapter = createEntityAdapter<Post>({
    sortComparer: sortByTitle
});
/*{ //* propiedades que se pueden incluir en el adapter
    // take id as the unique primary key
    selectId: (post: Post) => post.id!

    sortComparer: sortByName
}*/

export const initialState: PostsState = postsAdapter.getInitialState({
    // add custom data different from the post
    count: 0
});

// acomodar por orden alfabetico
export function sortByTitle(a: Post, b: Post): number {
    return a.title.localeCompare(b.title)
}


