import { Component, OnInit } from '@angular/core';
import { of, timer, interval, fromEvent } from 'rxjs';
import { debounce, debounceTime, delayWhen, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Debounce - Discard emitted values that take less than the specified time,
    // based on selector function, between output.

    const source = fromEvent(document, 'click');
    const example = source.pipe(map(event => `Click time with debounce: ${event.timeStamp}`));
    example.pipe(debounce(() => timer(500))).subscribe(val => this.output.push(val));

    // DebounceTime - Discard emitted values that take less than the specified time between output

    const source2 = fromEvent(document, 'click');
    const example2 = source2.pipe(map(event => `Click time with debounceTime: ${event.timeStamp}`));
    example2.pipe(debounceTime(500)).subscribe(val => this.output2.push(val));

  }
}


