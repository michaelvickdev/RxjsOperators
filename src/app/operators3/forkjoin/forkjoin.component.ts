import { Component, OnInit } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { forkJoin, of, interval } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // When all observables complete, emit the last emitted value from each.

    const myPromise = val =>
      new Promise(resolve =>
        setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
      );

    const example = forkJoin(
      of('Hello'),
      of('World').pipe(delay(1000)),
      interval(1000).pipe(take(1)),
      interval(1000).pipe(take(2)),
      myPromise('RESULT')
    );
    example.subscribe(val => this.output.push(val));
  }
}
