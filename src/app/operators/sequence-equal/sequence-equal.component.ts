import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of, from, fromEvent } from 'rxjs';
import {
  sequenceEqual,
  map,
  bufferCount,
  mergeMap,
  tap,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-sequence-equal',
  templateUrl: './sequence-equal.component.html',
  styleUrls: ['./sequence-equal.component.scss']
})
export class SequenceEqualComponent implements OnInit {
  @ViewChild('result') result: ElementRef;

  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Compares all values of two observables in sequence using an
    // optional comparor function and returns an observable of
    // a single boolean value representing whether or not the two sequences are equal.

    // Example 1: simple sequenceEqual

    const expectedSequence = from([4, 5, 6]);

    of([1, 2, 3], [4, 5, 6], [7, 8, 9])
      .pipe(switchMap(arr => from(arr).pipe(sequenceEqual(expectedSequence))))
      .subscribe(item => this.output.push(item));

    // Example 2: sequenceEqual with keyboard events

    const expectedSequence2 = from(['q', 'w', 'e', 'r', 't', 'y']);
    const setResult = text =>
      (this.result.nativeElement.innerText = text);

    fromEvent(document, 'keydown')
      .pipe(
        map((e: KeyboardEvent) => e.key),
        tap(v => setResult(v)),
        bufferCount(6),
        mergeMap(keyDowns =>
          from(keyDowns).pipe(
            sequenceEqual(expectedSequence2),
            tap(isItQwerty =>
              setResult(isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!')
            )
          )
        )
      )
      .subscribe(e => this.output2.push(`Did you say qwerty? ${e}`));
  }
}
