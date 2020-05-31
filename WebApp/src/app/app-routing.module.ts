import { ShowCommentsComponent } from './news/show-comments/show-comments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShownewsComponent } from './news/shownews/shownews.component';
import { EditNewsComponent } from './news/ajout-edit-news/edit-news.component';

const routes: Routes = [
  { path: '', component: ShownewsComponent },
  { path: 'EditNews', component: EditNewsComponent },
  { path: 'post/:postID', component: ShowCommentsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
