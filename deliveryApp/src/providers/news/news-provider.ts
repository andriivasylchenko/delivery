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
      let dataRequest = new WLResourceRequest("/adapters/JavaHTTP", WLResourceRequest.GET);

      dataRequest.send().then((response) => {
        console.debug('--> data loaded from adapter', response);
        this.data = response.responseJSON.news;
        resolve(this.data)
      }, (failure) => {
        console.debug('--> failed to load data from adapter', failure);
        resolve('error')
      })
    });
  }
}

