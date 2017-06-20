import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers: [StorageProvider]
})
export class NewsPage {

  news: any;

  constructor(public newsData: StorageProvider) {
    console.log('---> NewsPage init');

    this.loadNews();
  }

  loadNews() {
    this.newsData.getAll().then((results) => {
      console.log('---> news loaded');
      this.news = results;
    }, (failure) => {
      console.log('---> failed to load news', failure);
    })
  }

}
