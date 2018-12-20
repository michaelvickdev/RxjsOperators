import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {
  output = [];
  constructor() {}

  ngOnInit() {
    // Only emit when the current value is different than the last.
    const myArrayWithDuplicatesInARow = from([1, 1, 2, 2, 3, 1, 2, 3]);

    const distinctSub = myArrayWithDuplicatesInARow
      .pipe(distinctUntilChanged())
      .subscribe(val => this.output.push('DISTINCT SUB:', val));

    myArrayWithDuplicatesInARow.subscribe(val =>
      this.output.push('NON DISTINCT SUB:', val)
    );
  }
}
