import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  URL: string = "http://localhost:3000/api"

  constructor(private http:HttpClient) { }

  getArticles() {
    return this.http.get<Article[]>(this.URL);
  }

  getArticle(id: string) {
    return this.http.get<Article>(`${this.URL}/${id}`);
  }

  deleteArticle(id: string) {
    return this.http.delete<Article>(`${this.URL}/${id}`);
  }

}
