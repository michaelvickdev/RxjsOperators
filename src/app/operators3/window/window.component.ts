import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import {
  window,
  windowToggle,
  windowTime,
  tap,
  mergeAll,
  windowWhen
} from 'rxjs/operators';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  output = [];
  output2 = [];
  output3 = [];
  output4 = [];

  constructor() {}

  ngOnInit() {
    // window - Observable of values for window of time.

    const source = timer(0, 1000);
    const example = source.pipe(window(interval(3000)));

    example.subscribe(val => this.output.push(`Window ${val}:`));

    example.pipe(mergeAll()).subscribe(val => this.output.push(val));

    // windowTime - Observable of values collected from source for each provided time span.

    const source2 = timer(0, 1000);
    const example2 = source2.pipe(
      windowTime(3000),
      tap(_ => this.output2.push('NEW WINDOW!'))
    );

    example2.pipe(mergeAll()).subscribe(val => this.output2.push(val));

    // windowToggle - Collect and emit observable of values from source between opening and closing emission.

    const source3 = timer(0, 1000);
    const toggle3 = interval(5000);
    const example3 = source3.pipe(
      windowToggle(toggle3, val => interval(val * 1000)),
      tap(_ => this.output3.push('NEW WINDOW!'))
    );
    example3.pipe(mergeAll()).subscribe(val => this.output3.push(val));

    // windowWhen - Close window at provided time frame emitting observable of collected values from source.

    const source4 = timer(0, 1000);
    const example4 = source4.pipe(
      windowWhen(() => interval(5000)),
      tap(_ => this.output4.push('NEW WINDOW!'))
    );

    example4.pipe(mergeAll()).subscribe(val => this.output4.push(val));
  }
}
