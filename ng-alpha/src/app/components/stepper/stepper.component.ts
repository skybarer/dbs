import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  items = [
    { 'name': 'Item 1', 'routerLink': ' ' },
    { 'name': 'Item 2', 'routerLink': '1'  },
    { 'name': 'Item 3', 'routerLink': '2'  },
    { 'name': 'Item 4', 'routerLink': '3' },
    { 'name': 'Item 5', 'routerLink': '4' },
    { 'name': 'Item 6', 'routerLink': '5' }
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
