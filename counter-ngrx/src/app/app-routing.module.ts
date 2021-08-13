import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/ui/home/home.component';
import { CounterComponent } from './components/counter/counter/counter.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'counter', 
    component: CounterComponent
  },
  {
    path: 'posts', 
    component: PostListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
