import { Component, OnInit } from '@angular/core';
import { sample } from 'rxjs/operators';
import { interval, zip, from } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Sample from source when provided observable emits.
    // Example 1: Sample source every 2 seconds

    const source = interval(1000);
    const example = source.pipe(sample(interval(2000)));
    example.subscribe(val => this.output.push(val));

    // Example 2: Sample source when interval emits

    const source2 = zip(
      from(['Joe', 'Frank', 'Bob']),
      interval(2000)
    );
    const example2 = source2.pipe(sample(interval(2500)));
    example2.subscribe(val => this.output2.push(val));
  }
}
