import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { NewsService } from 'src/app/services/news-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
post = new Post();
  constructor(
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit() {
  }
  onAjouterClick(){
    this.newsService.PostNew(this.post).subscribe(
        result => {
          this.router.navigate(['']);

        });
  }
}
