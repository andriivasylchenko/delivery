import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule';
import { TimeDividerPipe } from '../../pipes/time-divider/time-divider';

@NgModule({
  declarations: [
    SchedulePage,
    TimeDividerPipe
  ],
  imports: [
    IonicPageModule.forChild(SchedulePage),
  ],
  exports: [
    SchedulePage,
    TimeDividerPipe
  ]
})
export class SchedulePageModule {}
