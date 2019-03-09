import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpha-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


  @Input() value: number;
  @Input() mode: string;
  @Input() color: string;

  @Output() _increment = new EventEmitter();
  @Output() _decrment = new EventEmitter();


  constructor() { }

  ngOnInit() {}

  increment = () => {
    if (this.value > 99) { return; }
    this.value += 16.66;
    this._increment.emit(this.value);
  }
  decrement = () => {
    if (this.value < 16.66) { return; }
    this.value -= 16.66;
    this._increment.emit(this.value);
  }

}
