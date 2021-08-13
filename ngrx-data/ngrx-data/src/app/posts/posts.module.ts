import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data'
import { Post } from '../models/post.model'
import { PostAddComponent } from './post-add/post-add.component'
import { PostDataService } from './post-data.service'
import { PostEditComponent } from './post-edit/post-edit.component'
import { PostIndividualComponent } from './post-individual/post-individual.component'
import { PostsListComponent } from './posts-list/posts-list.component'
import { PostsResolver } from './posts.resolver'

const routes: Routes = [
    {
        path: '', 
        component: PostsListComponent, 
        resolve: {posts: PostsResolver}
    },
    {
        path: 'add', 
        component: PostAddComponent
    },
    {
        path: 'edit/:id', 
        component: PostEditComponent, 
        resolve: {posts: PostsResolver}
    },
    {
        path: 'details/:id', 
        component: PostIndividualComponent, 
        resolve: {posts: PostsResolver}
    }
];

const entityMetadata: EntityMetadataMap = {
    Post: {
        sortComparer: sortyByName,
        entityDispatcherOptions: {
            // list of options
            // * optimisticalUpdate => automatically got updated without waiting for the http request
            optimisticUpdate: true,

            // * pesimisticUpdate => se espera a la llamada de http para hcer el cambio

            optimisticDelete: false
        }
    },
};

function sortyByName(a: Post, b: Post): number {
    return a.title.localeCompare(b.title)
}

@NgModule({
    declarations: [
        PostsListComponent,
        PostAddComponent,
        PostEditComponent,
        PostIndividualComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [PostDataService, PostsResolver ]
})

export class PostsModule {
    constructor(
        eds: EntityDefinitionService,
        entityDataService: EntityDataService,
        postDataService: PostDataService
    ) {
        eds.registerMetadataMap(entityMetadata);
        entityDataService.registerService('Post', postDataService)

    }
}