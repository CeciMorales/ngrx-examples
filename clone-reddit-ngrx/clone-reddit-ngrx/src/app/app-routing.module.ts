import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthDashboardComponent } from './components/authentication/auth-dashboard/auth-dashboard.component'
//import { PostsDashboardComponent } from './components/posts/posts-dashboard/posts-dashboard.component';
//import { PostDashboardComponent } from './components/posts/post-dashboard/post-dashboard.component';
import { ProfileDashboardComponent } from './components/profile/profile-dashboard/profile-dashboard.component';
import { IMPORT_STATE } from '@ngrx/store-devtools/src/actions';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '', component: AuthDashboardComponent
  },
  {
    path: 'posts', 
    loadChildren: () => import('./ngrx/posts/posts.module').then((m) => m.PostsModule),
    canActivate: [AuthGuard]
    
  },
  {
    path: 'profile/:id', component: ProfileDashboardComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./ngrx/auth/auth.module').then((m) => m.AuthModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
