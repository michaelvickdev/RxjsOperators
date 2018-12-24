import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { concatMap, concatMapTo, delay, mergeMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // ConcatMap - Map values to inner observable, subscribe and emit in order.
    const source = of(2000, 1000);
    const example = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    example.subscribe(val => this.output.push(`With concatMap: ${val}`));

    const mergeMapExample = source
      .pipe(
        delay(5000),
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      )
      .subscribe(val => this.output.push(`With mergeMap: ${val}`));

    // ConcatMapTo - Subscribe to provided observable when previous completes, emit values.

    const sampleInterval = interval(500).pipe(take(5));
    const fakeRequest = of('Network request complete').pipe(delay(3000));
    const example2 = sampleInterval.pipe(concatMapTo(fakeRequest));
    example2.subscribe(val => this.output2.push(val));
  }
}
