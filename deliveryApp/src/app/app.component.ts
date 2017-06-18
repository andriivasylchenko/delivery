import { Component } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  public AuthHandler:any;

  constructor(platform: Platform, statusBar: StatusBar, public alertCtrl: AlertController, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.AuthInit();
  }

  AuthInit(){
    this.AuthHandler = WL.Client.createSecurityCheckChallengeHandler("UserLogin");
    this.AuthHandler.handleChallenge = ((response) => {
      console.debug('--> inside handleChallenge');
      if(response.errorMsg) {
        var msg = response.errorMsg + '<br>';
        msg += 'Remaining attempts: ' + response.remainingAttempts;
      }
      this.displayLogin(msg);
    })
  }

  displayLogin(msg){
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: msg,
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Login',
          handler: data => {
            console.log('--> Trying to auth with user', data.username);

            this.AuthHandler.submitChallengeAnswer(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
