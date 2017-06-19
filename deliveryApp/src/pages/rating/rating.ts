import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { EmployeeProvider } from '../../providers/employee/employee-provider';

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
  providers: [EmployeeProvider]
})
export class RatingPage {

  items: any;

  constructor(public employees: EmployeeProvider) {
    console.log('---> RatingPage init');

    this.loadEmployees();
  }

  loadEmployees() {
    console.log('---> called loadEmployees');
    this.employees.load().then((data) => {
      this.items = data;
    })
  }

}
