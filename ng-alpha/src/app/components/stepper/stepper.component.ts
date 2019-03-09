import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  items = [
    { 'name': 'Basic Information', 'routerLink': ' ', 'subItems': [{ 'name': 'Application Contact Info' }, { 'name': "sth2" }] },
    { 'name': 'Enterprise Information', 'routerLink': '1'  },
    { 'name': 'Bank of service application', 'routerLink': '2'  },
    { 'name': 'File Uplaod', 'routerLink': '3' },
    { 'name': 'Confirm', 'routerLink': '4' }
  ];

  itemsLength: number;



  ngOnInit() {
    this.itemsLength = this.items.length;
  }

  // to remove last divider in list
  isMdDividerRequired = (index: number) => {
    if (index === this.itemsLength - 1) { return false; }
    return true;
  }

  previousLink = () => {

  }

  nextLink = () => {

  }


}
