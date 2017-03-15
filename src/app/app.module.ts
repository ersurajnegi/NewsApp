import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    NewsComponent,
    NewsItemComponent,
    FilterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
