import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { SchedulePage } from '../pages/schedule/schedule';
import { RatingPage } from '../pages/rating/rating';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmployeeProvider } from '../providers/employee/employee-provider';
import { NewsProvider } from '../providers/news/news-provider';
import { ScheduleProvider } from '../providers/schedule/schedule-provider';
import { TimeDividerPipe } from '../pipes/time-divider/time-divider';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    NewsPage,
    RatingPage,
    TabsPage,
    TimeDividerPipe
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    NewsPage,
    RatingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeeProvider,
    NewsProvider,
    ScheduleProvider
  ]
})
export class AppModule {}
