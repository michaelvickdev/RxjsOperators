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
  intervalArray = [];
  timerArray = [];

  constructor() {}

  ngOnInit() {
    // Interval - Emit numbers(of events), with interval 4sec
    const source = interval(4000);
    source.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
      this.intervalArray.push(val);
    });

    // Timer -  1 argumet - delay, 2 argument - intervals for next emits after start with delay
    const source2 = timer(2000, 1000);

    source2.pipe(takeUntil(this.unsubscribe$)).subscribe(val => {
      this.timerArray.push(val);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
