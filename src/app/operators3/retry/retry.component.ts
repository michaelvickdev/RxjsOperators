import { Component, OnInit } from '@angular/core';
import { interval, of, timer, throwError } from 'rxjs';
import {
  mergeMap,
  retry,
  map,
  tap,
  retryWhen,
  delayWhen
} from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Retry -  an observable sequence a specific number of times should an error occur.

    const source = interval(1000);
    const example = source.pipe(
      mergeMap(val => {
        if (val > 5) {
          return throwError('Error!');
        }
        return of(val);
      }),
      retry(2)
    );

    example.subscribe({
      next: val => this.output.push(val),
      error: val => this.output.push(`${val}: Retried 2 times then quit!`)
    });

    // retryWhen - Retry an observable sequence on error based on custom criteria.

    const source2 = interval(1000);
    const example2 = source2.pipe(
      map(val => {
        if (val > 5) {
          throw val;
        }
        return val;
      }),
      retryWhen(errors =>
        errors.pipe(
          tap(val => this.output2.push(`Value ${val} was too high!`)),
          delayWhen(val => timer(val * 1000))
        )
      )
    );

    example2.subscribe(val => this.output2.push(val));
  }
}
