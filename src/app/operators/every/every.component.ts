import { Component, OnInit } from '@angular/core';
import { every } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // If all values pass predicate before completion emit true, else false.
    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(
      every(val => val % 2 === 0)
    );

    example.subscribe(val => this.output.push(val));
  }
}
