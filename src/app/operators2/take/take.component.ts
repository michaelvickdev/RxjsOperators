import { Component, OnInit } from '@angular/core';
import { of, interval, timer } from 'rxjs';
import { take, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  output = [];
  output2 = [];
  output3 = [];

  constructor() {}

  ngOnInit() {
    // Take - Emit provided number of values before completing.

    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(take(1));
    example.subscribe(val => this.output.push(val));

    // TakeUntil - Emit values until provided observable emits.

    const source2 = interval(1000);
    const timer$ = timer(5000);
    const example2 = source2.pipe(takeUntil(timer$));
    example2.subscribe(val => this.output2.push(val));

    // TakeWhile - Emit values until provided expression is false.

    const source3 = of(1, 2, 3, 4, 5);
    const example3 = source3.pipe(takeWhile(val => val <= 4));
    example3.subscribe(val => this.output3.push(val));
  }
}
