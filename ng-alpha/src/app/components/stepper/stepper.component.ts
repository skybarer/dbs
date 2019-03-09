import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alpha-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  items = [
    {
      'name': 'Basic Information',
      'link': 'application-contact-info',
      'subItems': [
        { 'name': 'Application Contact Info', 'link': 'application-contact-info' },
        { 'name': 'Select Account type', 'link': 'select-account-type' }]
    },
    { 'name': 'Enterprise Information', 'link': 'enterprise-information'  },
    { 'name': 'Bank of service application', 'link': 'bank-of-service-application'  },
    { 'name': 'File Uplaod', 'link': 'file-uplaod' },
    { 'name': 'Confirm', 'link': 'confirm' }
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
