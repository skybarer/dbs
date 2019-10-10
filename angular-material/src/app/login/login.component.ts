import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rf: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rf = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.rf.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    // this.submitted = true;

    // stop here if form is invalid
    if (this.rf.invalid) {
      return;
    }

    console.log(this.rf.value);
  }

}
