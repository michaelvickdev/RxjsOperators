import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {
  output = [];
  constructor() {}

  ngOnInit() {
    // Error if no value is emitted before specified duration

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
  }

  makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
  }
}
