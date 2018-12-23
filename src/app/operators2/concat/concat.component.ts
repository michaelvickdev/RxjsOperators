import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Concat - Subscribe to observables in order as previous completes, emit values.

    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
    const example = sourceOne.pipe(concat(sourceTwo));
    example.subscribe(val =>
      this.output.push('Example: Basic concat:', val)
    );
  }
}
