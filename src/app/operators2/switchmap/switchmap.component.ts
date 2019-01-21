import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer, interval } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  output = [];

  constructor() {}

  ngOnInit() {
    // SwitchMap - Map to observable, complete previous inner observable, emit values.

    const source = timer(0, 5000);
    const example = source.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(() => interval(500))
    );
    example.subscribe(val => this.output.push(val));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
