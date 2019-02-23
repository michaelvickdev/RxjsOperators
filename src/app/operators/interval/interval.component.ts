import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private subscription;
  output = [];
  output1 = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Interval - Emit numbers(of events), with interval 4sec
    const source = interval(4000);
    source.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
      this.output.push(val);
    });

    // Example 1: timer emits 1 value then completes
    // Timer -  1 argumet - delay, 2 argument - intervals for next emits after start with delay
    const source2 = timer(1000);

    source2.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
      this.output1.push(val);
    });

    // Example 2: timer emits after 1 second, then every 2 seconds
    const source3 = timer(1000, 2000);
    this.subscription = source3.subscribe(val => this.output2.push(val));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    // Ubsubscribe for api calls, to not block UI:
    this.subscription.unsubscribe();
  }
}
