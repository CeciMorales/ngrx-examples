import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthDashboardComponent } from './components/authentication/auth-dashboard/auth-dashboard.component';
//import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
//import { PostComponent } from './components/posts/post/post.component';
//import { PostPrimaryActionsComponent } from './components/posts/post-primary-actions/post-primary-actions.component';
//import { PostSecondaryActionsComponent } from './components/posts/post-secondary-actions/post-secondary-actions.component';
/*import { CommentsListComponent } from './components/comments/comments-list/comments-list.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommentPrimaryActionsComponent } from './components/comments/comment-primary-actions/comment-primary-actions.component';*/
//import { PostsDashboardComponent } from './components/posts/posts-dashboard/posts-dashboard.component';
import { ProfileDashboardComponent } from './components/profile/profile-dashboard/profile-dashboard.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SectionsComponent } from './components/ui/sections/sections.component';
import { FilterComponent } from './components/ui/filter/filter.component';
//import { PostModalComponent } from './components/posts/post-modal/post-modal.component';
import { CommentModalComponent } from './components/comments/comment-modal/comment-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// * ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; //
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { WelcomeComponent } from './components/authentication/welcome/welcome.component';
import { WelcomeActionsComponent } from './components/authentication/welcome-actions/welcome-actions.component';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';
import { AlertMessageComponent } from './components/ui/alert-message/alert-message.component';
import { AuthEffects } from './ngrx/auth/auth.effects';
import { AuthTokenInterceptor } from './services/interceptors/AuthToken.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './ngrx/router/custom-serializer';
import { ProfileEffects } from './ngrx/profile/profile.effects';
import { ProfileModalComponent } from './components/profile/profile-modal/profile-modal.component';
import { ProfileUserInfoComponent } from './components/profile/profile-user-info/profile-user-info.component';
import { ProfileUserPostsComponent } from './components/profile/profile-user-posts/profile-user-posts.component';
import { ProfileUserContactsComponent } from './components/profile/profile-user-contacts/profile-user-contacts.component';
//import { SignupComponent } from './components/authentication/signup/signup.component';
//import { LoginComponent } from './components/authentication/login/login.component';
//import { PostsDashboardPrimaryActionsComponent } from './components/posts/posts-dashboard-primary-actions/posts-dashboard-primary-actions.component';
//import { PostDashboardComponent } from './components/posts/post-dashboard/post-dashboard.component';
//import { PostIndividualComponent } from './components/posts/post-individual/post-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthDashboardComponent,
    /*PostsListComponent,
    PostComponent,
    PostPrimaryActionsComponent,
    PostSecondaryActionsComponent,*/
    /*CommentsListComponent,
    CommentComponent,
    CommentPrimaryActionsComponent,*/
    //PostsDashboardComponent,
    ProfileDashboardComponent,
    ProfileComponent,
    HeaderComponent,
    SectionsComponent,
    FilterComponent,
    //PostModalComponent,
    CommentModalComponent,
    WelcomeComponent,
    WelcomeActionsComponent,
    LoadingSpinnerComponent,
    AlertMessageComponent,
    ProfileModalComponent,
    ProfileUserInfoComponent,
    ProfileUserPostsComponent,
    ProfileUserContactsComponent,
    //SignupComponent,
    //LoginComponent,
    /*PostsDashboardPrimaryActionsComponent,
    PostDashboardComponent,
    PostIndividualComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,

    // ngrx
    EffectsModule.forRoot([AuthEffects, ProfileEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
  ],
  providers: [
    {provide: 
      HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      // multiple interceptables are allowed
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
