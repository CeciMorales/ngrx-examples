import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostDashboardComponent } from '../../components/posts/post-dashboard/post-dashboard.component';
import { PostIndividualComponent } from '../../components/posts/post-individual/post-individual.component';
import { PostModalComponent } from '../../components/posts/post-modal/post-modal.component';
import { PostPrimaryActionsComponent } from '../../components/posts/post-primary-actions/post-primary-actions.component';
import { PostSecondaryActionsComponent } from '../../components/posts/post-secondary-actions/post-secondary-actions.component';
import { PostComponent } from '../../components/posts/post/post.component';
import { PostsDashboardPrimaryActionsComponent } from '../../components/posts/posts-dashboard-primary-actions/posts-dashboard-primary-actions.component';
import { PostsDashboardComponent } from '../../components/posts/posts-dashboard/posts-dashboard.component';
import { PostsListComponent } from '../../components/posts/posts-list/posts-list.component';
import { CommentsListComponent } from 'src/app/components/comments/comments-list/comments-list.component';
import { SharedModule } from '../../components/shared/shared.module';
import { PostsEffects } from './posts.effects';
import { postsReducer } from './posts.reducer';
import { POSTS_STATE_NAME} from './posts.selectors';
const routes: Routes = [
    {
        path: '', component: PostsDashboardComponent
    },
    {
        path: 'details/:id', component: PostDashboardComponent
    }
];

@NgModule({
    declarations:[
        PostsListComponent,
        PostComponent,
        PostPrimaryActionsComponent,
        PostSecondaryActionsComponent,
        PostsDashboardComponent,
        PostModalComponent,
        PostsDashboardPrimaryActionsComponent,
        PostDashboardComponent,
        PostIndividualComponent,
        CommentsListComponent
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
        EffectsModule.forFeature([PostsEffects])
    ]

})

export class PostsModule {

}