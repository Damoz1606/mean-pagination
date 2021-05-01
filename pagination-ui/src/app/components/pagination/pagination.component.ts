import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../interface/article';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  articles: Article[];
  page: number = 1;
  perPage: number = 10;
  // pages: number[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
    .subscribe(
      res => {
        this.articles = <Article[]>res;
        // this.setPageNumber();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteArticle(id: string): void{
    this.articleService.deleteArticle(id)
    .subscribe(
      res => {
        this.articles = this.articles.filter(item => { if(item._id != res._id){ return item; } });
      },
      error => {
        console.log(error);
      }
    );
  }

  // setPageNumber(): void {
  //   let numberPages = Math.ceil(this.articles.length / this.perPage);
  //   for(let i = 1; i <= numberPages; i++){
  //     this.pages.push(i);
  //   }
  // }

  getPages(item): Article[]{
    if(!item){
      return;
    }
    let from = (this.page * this.perPage) - this.perPage;
    let to = (this.page * this.perPage);
    return item.slice(from, to);
  }

  displayPages(): Article[] {
    return this.getPages(this.articles);
  }

  onPage(item: number){
    console.log(item);
  }

}
