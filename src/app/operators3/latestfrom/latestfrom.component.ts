import { Component, OnInit } from '@angular/core';
import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-latestfrom',
  templateUrl: './latestfrom.component.html',
  styleUrls: ['./latestfrom.component.scss']
})
export class LatestfromComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Also provide the last value from another observable.

    const source = interval(5000);
    const secondSource = interval(1000);
    const example = source.pipe(
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );

    example.subscribe(val => this.output.push(val));
  }
}
