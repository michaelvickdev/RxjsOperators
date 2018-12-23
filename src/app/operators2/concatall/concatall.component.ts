import { Component, OnInit } from '@angular/core';
import { map, concatAll } from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Component({
  selector: 'app-concatall',
  templateUrl: './concatall.component.html',
  styleUrls: ['./concatall.component.scss']
})
export class ConcatallComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Collect observables and subscribe to next when previous completes.

    const source = interval(2000);
    const example = source.pipe(
      map(val => of(val + 10)),
      concatAll()
    );
    example.subscribe(val =>
      this.output.push('Example with Basic Observable:', val)
    );
  }
}
