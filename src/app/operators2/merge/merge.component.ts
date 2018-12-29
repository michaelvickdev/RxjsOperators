import { Component, OnInit } from '@angular/core';
import { mapTo, mergeAll, map, mergeMap } from 'rxjs/operators';
import { interval, merge, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  output = [];
  output2 = [];
  output3 = [];

  constructor() {}

  ngOnInit() {

    // Merge - Turn multiple observables into a single observable.

    const first = interval(2500);
    const second = interval(2000);
    const third = interval(1500);
    const fourth = interval(1000);

    const example = merge(
      first.pipe(mapTo('FIRST!')),
      second.pipe(mapTo('SECOND!')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH'))
    );

    example.subscribe(val => this.output.push(val));

    // MergeAll - Collect and subscribe to all observables.

    const myPromise = val =>
      new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
    const source2 = of(1, 2, 3);

    const example2 = source2.pipe(
      map(val => myPromise(val)),
      mergeAll()
    );
    example2.subscribe(val => this.output2.push(val));

    // mergeMap (flatMap) - Map to observable, emit values.

    const source3 = of('Hello');
    const example3 = source3.pipe(mergeMap(val => of(`${val} World!`)));
    example3.subscribe(val => this.output3.push(val));
  }
}
