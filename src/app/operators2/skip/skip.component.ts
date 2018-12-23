import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { skip, skipUntil, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {
  output = [];
  output2 = [];
  output3 = [];

  constructor() {}

  ngOnInit() {
    // skip - the provided number of emitted values.

    const source = interval(1000);
    const example = source.pipe(skip(4));
    example.subscribe(val => this.output.push(val));

    // skipUntil - Skip emitted values from source until provided observable emits.

    const source2 = interval(1000);
    const example2 = source2.pipe(skipUntil(timer(6000)));
    example2.subscribe(val => this.output2.push(val));

    // Skip emitted values from source until provided expression is false.

    const source3 = interval(1000);
    const example3 = source3.pipe(skipWhile(val => val < 2));
    example3.subscribe(val => this.output3.push(val));
  }
}
