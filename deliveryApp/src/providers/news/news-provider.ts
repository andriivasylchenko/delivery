import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsProvider {
  data: any = null;

  constructor(public http: Http) { }

  load() {
    console.log('---> called NewsProvider load');

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:4567/news')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          console.debug('News load data ', this.data.news);
          resolve(this.data.news);
        });
    });
  }
}

