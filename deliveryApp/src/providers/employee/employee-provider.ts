import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeProvider {
  data: any = null;

  constructor(public http: Http) { }

  load() {
    console.log('---> called EmployeeProvider load');

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get('http://10.0.1.9:4567/employees')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          console.debug('Employee load data ', this.data.results);
          resolve(this.data.results);
        });
    });
  }
}

