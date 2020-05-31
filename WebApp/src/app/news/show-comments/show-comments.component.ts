import { element } from 'protractor';
import { NewsService } from './../../services/news-services.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Comment } from 'src/app/models/comment.model';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
  post = new Post();
  posts: Post[];
  postTrouver = new Post();
  comments: Comment[];
  comment = new Comment();

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    // récupérer le post
    this.route.params.subscribe((params: Params) => {
      setTimeout(() => {
        this.newsService.GetNew(params.postID)
          .subscribe(
            post => {
              this.post = post;
              this.comments = this.post.comments;
              // récupérer le post
              this.newsService.GetAllNews()
                .subscribe(
                  news => {
                    this.posts = news;
                    this.posts.forEach(element => {
                      if (element._id == this.post._id) {
                        this.postTrouver = element;
                      }
                    });
                    // erreur chargement posts
                  }, error => {
                  }
                );
              // erreur chargement posts
            }, error => {
            }
          );
      }, 6000);
    });
  }
  onAjouteComment(comment: any) {
    // comment._id = -1;
    // comment.post = this.postTrouver._id;
    //   comment.upvote = 0;
    //   comment.__v = 0;
       this.postTrouver.comments = [];
      this.comments.push(comment);

    this.newsService.PostComment(this.post._id, comment).subscribe(
      result => {

      }
    )
  }
}
