import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: "articles",
    component: PaginationComponent
  },
  {
    path: "articles/:id",
    component: ArticleComponent
  },
  {
    path: "",
    redirectTo: "/articles",
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
