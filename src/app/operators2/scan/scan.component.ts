import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Reduce - Reduces the values from source observable to
    // a single value that's emitted when the source completes.

    const source = of(1, 2, 3, 4);
    const example = source.pipe(reduce((acc, val) => acc + val));
    example.subscribe(val => this.output.push('Sum:', val));

    // Scan - Reduce over time.

    const source2 = of(1, 2, 3);
    const example2 = source2.pipe(scan((acc, curr) => acc + curr, 0));
    example2.subscribe(val => this.output2.push(val));
  }
}
