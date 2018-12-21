import { Component, OnInit } from '@angular/core';
import { of, merge, interval, timer } from 'rxjs';
import { mapTo, delay, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // delay - Delay emitted values by given time.
    const example = of(null);
    const message = merge(
      example.pipe(mapTo('Hello')),
      example.pipe(
        mapTo('World!'),
        delay(1000)
      ),
      example.pipe(
        mapTo('Goodbye'),
        delay(2000)
      ),
      example.pipe(
        mapTo('World!'),
        delay(3000)
      )
    );
    message.subscribe(val => this.output.push(val));

    // delayWhen -  Delay emitted values determined by provided function.
    const message2 = interval(1000);
    const delayForFiveSeconds = () => timer(5000);
    const delayWhenExample = message2.pipe(delayWhen(delayForFiveSeconds));
    const subscribe = delayWhenExample.subscribe(val => this.output2.push(val));
  }
}
