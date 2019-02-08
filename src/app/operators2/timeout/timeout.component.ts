import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {
  output = [];
  output2 = [];
  constructor() {}

  ngOnInit() {
    // Error if no value is emitted before specified duration
    // Example 1: Observable that emits multiple values

    of(4000, 3000, 2000)
      .pipe(
        concatMap(duration =>
          this.makeRequest(duration).pipe(
            timeout(2500),
            catchError(error => of(`Request timed out after: ${duration}`))
          )
        )
      )
      .subscribe(val => this.output.push(val));

  // Example 2: Observable that emits even numbers on timer

  const evenNumbers = Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
      if (value % 2 === 0) {
        observer.next(value);
      }
      value++;
    }, 1000);
    return () => clearInterval(interval);
  });
  const subscribe = evenNumbers.subscribe(val => this.output2.push(val));
  setTimeout(() => {
    subscribe.unsubscribe();
  }, 10000);
  }

  makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
  }

}
