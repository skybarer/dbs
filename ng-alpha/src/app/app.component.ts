import { Component, ViewChild, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@Component({
  selector: 'alpha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-alpha';

  value = 16.66;

  @ViewChild(ProgressBarComponent) progresBar: ProgressBarComponent;

   constructor() {
    //  this.value = this.progresBar.value;
   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
    //  this.value = this.progresBar.value;
   }


  increment = () => {
    // this.value += 16.66;
    this.progresBar.increment();
  }
  decrement = () => {
    // this.value -= 16.66;
    this.progresBar.decrement();
  }
}
