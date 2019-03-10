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
        { 'name': 'Select Account type', 'link': 'select-account-type' }
      ]
    },
    {
      'name': 'Enterprise Information',
      'link': 'enterprise-information',
      'subItems': [
        { 'name': 'Enterprise Information', 'link': 'enterprise-information' },
        { 'name': 'Select Account type', 'link': 'select-account-type' }
      ]
     },
    { 'name': 'Bank of service application', 'link': 'bank-of-service-application' },
    { 'name': 'File Uplaod', 'link': 'file-uplaod' },
    { 'name': 'Confirm', 'link': 'confirm' }
  ];

  itemsLength: number;
  subItemsLength: number;
  selectedUserIndex: number;
  // iconStateMachine = [];


  ngOnInit() {
    this.itemsLength = this.items.length;
    for (let i = 0; i < this.itemsLength; i++) {
      (this.items[i])['tickIcon'] = false;
      (this.items[i])['arrowIcon'] = false;
      if (this.items[i].subItems) {
        for (let j = 0; j < this.items[i].subItems.length; j++) {
          (this.items[i].subItems[j])['tickIcon'] = false;
          (this.items[i].subItems[j])['arrowIcon'] = false;
        }
      }
    }
    (this.items[0])['tickIcon'] = true;
    (this.items[0].subItems[0])['tickIcon'] = true;
    console.log(this.items);
  }

  // to remove last divider in item-list
  isMdDividerRequiredForListItem = (index: number) => {
    if (index === this.itemsLength - 1) { return false; }
    return true;
  }

  // show and hide functionality of sublist items based on onclick.
    selectUserIndex =  (index: any) => {
      if (this.selectedUserIndex !== index) {
      this.selectedUserIndex = index;
      } else {
        this.selectedUserIndex = undefined;
      }
   }

  previousLink = () => {

  }

  nextLink = () => {

  }


}
