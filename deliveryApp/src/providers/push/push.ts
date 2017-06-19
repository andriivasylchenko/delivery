import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PushProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PushProvider {

  constructor(public http: Http) {
  }

  init() {
    MFPPush.initialize(function(success){
      console.debug('--> push init success')

      var options = {"phoneNumber": ""};

      MFPPush.registerNotificationsCallback(pushNotificationReceived);

      MFPPush.registerDevice(options, function(success){
        console.debug('--> device register success')

        var tag = ['delivery'];

        MFPPush.subscribe(tag, function(success){
          console.debug('--> push subscribe success')
        }, function(failure){
          console.debug('--> push subscribe success', failure)
        })
      }, function(failure){
        console.debug('--> device register failure', failure)
      })
    }, function(failure){
      console.debug('--> push init failure', failure)
    })

    function pushNotificationReceived(message) {
      console.debug('--> push received', message);
      alert(message.alert);
    }
  }

}
