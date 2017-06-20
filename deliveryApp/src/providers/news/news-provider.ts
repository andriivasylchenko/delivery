import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StorageProvider } from '../storage/storage';

@Injectable()
export class NewsProvider {
  data: any = null;

  constructor(public storage: StorageProvider) { }

  load() {
    console.log('---> called NewsProvider load');

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet

      let dataRequest = new WLResourceRequest("/adapters/JavaHTTP", WLResourceRequest.GET);

      dataRequest.send().then((response) => {
        console.debug('--> data loaded from adapter', response);
        this.data = response.responseJSON.news;
        console.debug('--> putting data to JSONStore')
        this.storage.put(this.data);
      }, (failure) => {
        console.debug('--> failed to load data from adapter', failure);
      })
  }
}

