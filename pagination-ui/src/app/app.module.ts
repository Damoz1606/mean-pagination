import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ArticleComponent } from './components/article/article.component';
import { PageChangerComponent } from './components/page-changer/page-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaginationComponent,
    ArticleComponent,
    PageChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
