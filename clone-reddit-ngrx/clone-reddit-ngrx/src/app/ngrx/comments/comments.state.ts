import { createEntityAdapter } from '@ngrx/entity';
import { Comment } from 'src/app/models/comments/Comment.interface';
import { CommentsState } from 'src/app/models/comments/CommentsState.interface';

export const commentsAdapter = createEntityAdapter<Comment>({

});

export const initialState: CommentsState = commentsAdapter.getInitialState({});
