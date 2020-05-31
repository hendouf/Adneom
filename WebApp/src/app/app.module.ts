import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShownewsComponent } from './news/shownews/shownews.component';
import { EditNewsComponent } from './news/ajout-edit-news/edit-news.component';
import { ALLOWED_URLS } from 'src/environments/environment';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ShowCommentsComponent } from './news/show-comments/show-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    ShownewsComponent,
    EditNewsComponent,
    ShowCommentsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
   OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ALLOWED_URLS, sendAccessToken: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
