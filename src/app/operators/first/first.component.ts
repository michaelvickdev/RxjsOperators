import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  output = [];

  constructor() { }

  ngOnInit() {
    // Emit the first value or first to pass provided expression.

    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(first());
    const subscribe = example.subscribe(val => this.output.push(`First value: ${val}`));
  }

}
