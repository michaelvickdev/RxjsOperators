import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Throttle - Emit value on the leading edge of an interval,
    // but suppress new values until durationSelector has completed.

    const source = interval(1000);
    const example = source.pipe(throttle(val => interval(2000)));
    example.subscribe(val => this.output.push(val));

    // ThrottleTime - Emit latest value when specified duration has passed.

    const source2 = interval(1000);
    const example2 = source2.pipe(throttleTime(5000));
    example2.subscribe(val => this.output2.push(val));
  }
}

// Разница между Throttle и Debouncer:
// - Debouncing объединяет серию последовательных вызовов в один,
// т.е. отправляет последнее значение если в определенный интервал вызовов больше не было
// - Throttle задерживает выполнение отправки, отправляя последнее значение через определенный интервал
