import { Component, OnInit, Input, forwardRef, SimpleChanges, OnChanges, ElementRef, Renderer2, Optional, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, FormBuilder, ControlValueAccessor, FormArray, NgControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';


@Component({
  selector: 'alpha-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  providers: [
    // { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxGroupComponent), multi: true },
    // { provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckboxGroupComponent), multi: true },
  ]
})
export class CheckboxGroupComponent implements ControlValueAccessor, OnInit, OnChanges {

  validateForm: FormGroup;
  @Input() inputData: any[];
  @Input() color: string;
  public items: any = [];
  delegatedMethodCalls = new ReplaySubject<(_: ControlValueAccessor) => void>();
  propagateChange: any = () => { };
  propagateTouch: any = () => { };
  validateFn: any = () => { };


  constructor(
    private formBuilder: FormBuilder,
    @Optional() @Self() public ngControl: NgControl,
    private _renderer: Renderer2,
    private _elementRef: ElementRef
  ) {
    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      checkbox: this.formBuilder.array([])
    });
    const checkboxFormArray = <FormArray>this.validateForm.controls.checkbox;
    for (let index = 0; index < this.inputData.length; index++) {
      if (this.inputData[index].checked) {
        checkboxFormArray.push(new FormControl(this.inputData[index].label));
      }
    }

    this.items = this.validateForm.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.propagateChange(changes.inputData.currentValue);
    this.propagateChange(changes.inputData.currentValue);
    console.log(changes );
  }


  onToggle(item: any, event: any, isChecked: any, index: number) {
    event.preventDefault();
    // alert(this.inputData[index].disabled);
    if (this.inputData[index].disabled) { return; }
    // console.log(event.checked);
    // console.log(`${item} ${isChecked} ${index}`);

    this.inputData[index].checked = !isChecked;

    const checkboxFormArray = <FormArray>this.validateForm.controls.checkbox;

    if (!isChecked) {
      checkboxFormArray.push(new FormControl(item));
    } else {
      const indexToRemove = checkboxFormArray.controls.findIndex(x => x.value === item);
      checkboxFormArray.removeAt(indexToRemove);
    }


    // console.log(this.validateForm.value);
  }


  writeValue(value) {
    // this.items = value;
    // console.log(value);
    // this.checkbox.
    // if (value !== undefined) {
    //   this.inputData = value;
    // }
    // this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
    // this.delegatedMethodCalls.next(valueAccessor => valueAccessor.writeValue(this.validateForm.value));
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }

  // validate(c: FormControl) {
  //   return this.validateFn(c);
  // }

  setDisabledState?(isDisabled: boolean): void {
  }

}

export function setUpControl(control: FormControl, dir: NgControl) {

  // initialize a form control
  dir.valueAccessor.writeValue(control.value);

  // setup a listener for changes on the native control
  // and set this value to form control
  dir.valueAccessor.registerOnChange((newValue: any) => {
    control.setValue(newValue, { emitModelToViewChange: false });
  });


  // setup a listener for changes on the Angular formControl
  // and set this value to the native control
  control.registerOnChange((newValue: any) => {
    dir.valueAccessor.writeValue(newValue);
  });


}

