import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Emit the last value emitted from source on completion, based on provided expression.

    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(last());
    example.subscribe(val => this.output.push(`Last value: ${val}`));
  }
}
