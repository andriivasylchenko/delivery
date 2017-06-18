import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { NewsPage } from '../news/news';
import { RatingPage } from '../rating/rating';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = NewsPage;
  tab3Root = RatingPage;

  constructor() {

  }
}
