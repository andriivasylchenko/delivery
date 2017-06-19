import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ScheduleProvider {
  data: any = null;
  distance: any = null;

  constructor(public http: Http) { }

  load() {

    console.log('---> called ScheduleProvider load');

    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      let dataRequest = new WLResourceRequest("http://192.168.42.169:4567/schedule", WLResourceRequest.GET);

      dataRequest.send().then((response) => {
        console.debug('--> data loaded from adapter', response);
        this.data = response.responseJSON.delivery;
        resolve(this.data)
      }, (failure) => {
        console.debug('--> failed to load data from adapter', failure);
        resolve('error')
      })

    });
  }

  calc(destinations) {

    console.log('---> called ScheduleProvider calc');

    if (this.distance) {
      // already loaded data
      return Promise.resolve(this.distance);
    }

    // don't have the data yet
    return new Promise(resolve => {
      let curtime = Date.now();
      let origin = '50.019275,14.347424';
      let googleParams = 'origins=' + origin + '&destinations=' + destinations + '&departure_time=' + curtime + '&traffic_model=best_guess&language=en';

      console.log('---> googleParams', googleParams);
      let path = 'https://maps.googleapis.com:443/maps/api/distancematrix/json?' + googleParams

      this.http.get(path)
        .map(res => res.json())
        .subscribe(distance => {
          this.distance = distance;
          console.debug('Schedule calc data', this.distance.rows[0].elements);
          resolve(this.distance.rows[0].elements);
        });
    });
  }

}
