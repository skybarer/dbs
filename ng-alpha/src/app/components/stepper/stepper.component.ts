import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  items = [
    { 'name': 'Item 1', 'routerLink': ' ' },
    { 'name': 'Item 2', 'routerLink': '1'  },
    { 'name': 'Item 3', 'routerLink': '2'  }
  ];

  itemsLength: number;

  constructor() { }

  ngOnInit() {
    this.itemsLength = this.items.length;
  }

  // to remove last divider in list
  isMdDividerRequired = (index: number) => {
    if (index === this.itemsLength - 1) { return false; }
    return true;
  }


}
