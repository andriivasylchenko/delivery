import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news-provider';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers: [NewsProvider]
})
export class NewsPage {

  news: any;

  constructor(public newsData: NewsProvider) {
    console.log('---> NewsPage init');

    this.loadNews();
  }

  loadNews() {
    this.newsData.load().then((results) => {
      console.log('---> news loaded');
      this.news = results;
    }, (failure) => {
      console.log('---> failed to load news', failure);
    })
  }

}
