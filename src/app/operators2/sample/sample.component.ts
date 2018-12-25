import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Sample from source when provided observable emits.

    const source = interval(1000);
    const example = source.pipe(sample(interval(2000)));
    example.subscribe(val => this.output.push(val));
  }
}
