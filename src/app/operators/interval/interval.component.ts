import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  intervalArray = [];
  timerArray = [];

  constructor() { }

  ngOnInit() {
    //Interval - Emit numbers in sequence based on provided 
    const source = interval(1000);
    const subscribe = source.subscribe(val => {
      console.log(val);
      this.intervalArray.push(val)
    });

    //Timer - After given duration, emit numbers in sequence every specified duration.
    const source2 = timer(1000);

    const subscribe2 = source.subscribe(val => {
      console.log(val);
      this.timerArray.push(val)
    });

  }

}
