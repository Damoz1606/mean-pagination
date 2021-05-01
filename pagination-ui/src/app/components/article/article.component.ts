import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../interface/article';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private location: Location,private articleService:ArticleService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void{
    let id;
    this.activateRoute.params
    .subscribe(
      res => { id = res['id'] },
      error => console.log(error)
    );
    this.articleService.getArticle(id)
    .subscribe(
      res => { this.article = <Article>res },
      error => console.log(error)
    );
  }

  deleteArticle(id: string): void{
    this.articleService.deleteArticle(id)
    .subscribe(
      res => {
        this.location.back();
      },
      error => {
        console.log(error);
      }
    );
  }

  goBack(): void{
    this.location.back();
  }

}
