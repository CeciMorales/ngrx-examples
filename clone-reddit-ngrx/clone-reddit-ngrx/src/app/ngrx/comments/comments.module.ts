import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommentsListComponent } from 'src/app/components/comments/comments-list/comments-list.component';
import { CommentComponent } from 'src/app/components/comments/comment/comment.component';
import { CommentModalComponent } from 'src/app/components/comments/comment-modal/comment-modal.component';
import { CommentPrimaryActionsComponent } from 'src/app/components/comments/comment-primary-actions/comment-primary-actions.component';
import { SharedModule } from '../../components/shared/shared.module';
// comments effects y comments reducers