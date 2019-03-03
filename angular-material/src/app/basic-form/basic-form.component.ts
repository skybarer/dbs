import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-basic-form',
	templateUrl: './basic-form.component.html',
	styleUrls: [ './basic-form.component.css' ]
})
export class BasicFormComponent implements OnInit {
	rf: FormGroup;
	// submitted = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.rf = this.formBuilder.group({
			name: [ '', Validators.required ],
			email: [ '', Validators.required ],
			gender: [ '', Validators.required ],
			comments: [ '', Validators.required ]
		});
	}

	// convenience getter for easy access to form fields
	// get f() {
	// 	return this.rf.controls;
	// }

	public  hasError = (controlName: string, errorName: string) => {
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
