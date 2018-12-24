import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-ignore',
  templateUrl: './ignore.component.html',
  styleUrls: ['./ignore.component.scss']
})
export class IgnoreComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Ignore everything but complete and error.

    const source = interval(100);
    const example = source.pipe(
      take(5),
      ignoreElements()
    );
    const subscribe = example.subscribe(
      val => this.output.push(`NEXT: ${val}`),
      val => this.output.push(`ERROR: ${val}`),
      () => this.output.push('COMPLETE!')
    );
  }
}
