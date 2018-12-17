import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  output = [];

  constructor() { }

  ngOnInit() {
    // Emit values that pass the provided condition.
    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(filter(num => num % 2 === 0));
    const subscribe = example.subscribe(val => this.output.push(`Even number: ${val}`));
  }

}
