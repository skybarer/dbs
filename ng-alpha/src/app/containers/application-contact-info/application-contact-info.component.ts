import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'alpha-application-contact-info',
  templateUrl: './application-contact-info.component.html',
  styleUrls: ['./application-contact-info.component.scss']
})
export class ApplicationContactInfoComponent implements OnInit {

  validateForm: FormGroup;

  inputData = [
    {
      'label': 'red',
      'checked': true,
      'disabled': false
    },
    {
      'label': 'green',
      'checked': false,
      'disabled': false
    },
    {
      'label': 'yellow',
      'checked': true,
      'disabled': true
    }
  ];

  inputData1 = [
    {
      'label': 'red',
      'checked': true,
      'disabled': false
    },
    {
      'label': 'green',
      'checked': false,
      'disabled': false
    },
    {
      'label': 'yellow',
      'checked': true,
      'disabled': true
    }
  ];

  constructor() { }

  ngOnInit() {
    this.validateForm = new FormGroup({
      items: new FormControl('', Validators.required),
      items1: new FormControl('', Validators.required)
    });
  }

  submit() {
    console.log(this.validateForm.value);
  }

}
