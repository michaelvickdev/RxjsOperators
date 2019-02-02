import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { sequenceEqual, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sequence-equal',
  templateUrl: './sequence-equal.component.html',
  styleUrls: ['./sequence-equal.component.scss']
})
export class SequenceEqualComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Compares all values of two observables in sequence using an
    // optional comparor function and returns an observable of
    // a single boolean value representing whether or not the two sequences are equal.

    const expectedSequence = from([4, 5, 6]);

    of([1, 2, 3], [4, 5, 6], [7, 8, 9])
      .pipe(switchMap(arr => from(arr).pipe(sequenceEqual(expectedSequence))))
      .subscribe(item => this.output.push(item));
  }
}
