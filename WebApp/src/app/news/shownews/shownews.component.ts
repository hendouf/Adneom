import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { NewsService } from 'src/app/services/news-services.service';
import { Router } from '@angular/router';
import { Comment } from "src/app/models/comment.model";

@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShownewsComponent implements OnInit {
  posts: Post[];
  comment = new Comment();
  constructor( 
    private router: Router,
    private newsService: NewsService) { }

  ngOnInit() {
    

      // récupérer le post
      this.newsService.GetAllNews()
        .subscribe(
          news => {
        this.posts = news;
            // erreur chargement posts
          }, error => {
          }
        );
  }

  onAjouteComment(post:Post, comment: Comment){
    /*this.newsService.PostComment(post._id, this.comment).subscribe(
      result => {
        this.router.navigate(['']);

      });*/
  }
  onAjoutePost(){
    this.router.navigate(['/EditNews']);

  }
  onAjouteVote(post: Post){
    post.upvotes = post.upvotes + 1 ;
    this.newsService.PutNew(post._id,post).subscribe(
        result => {
          this.router.navigate(['']);

        });
  }
  onDemandeNew(post: Post){
    this.router.navigate(['/post/'+ post._id]);
  }
}
