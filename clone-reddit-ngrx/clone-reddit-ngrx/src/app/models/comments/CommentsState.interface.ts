import { EntityState } from '@ngrx/entity';
import { Comment } from './Comment.interface';

export interface CommentsState extends EntityState<Comment> {
}