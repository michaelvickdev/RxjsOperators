import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-grupby',
  templateUrl: './grupby.component.html',
  styleUrls: ['./grupby.component.scss']
})
export class GrupbyComponent implements OnInit {
  output = [];

  constructor() { }

  ngOnInit() {
    // Group into observables based on provided value.

    const people = [
      { name: 'Sue', age: 25 },
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 25 },
      { name: 'Sarah', age: 35 }
    ];
    const source = from(people);
    const example = source.pipe(
      groupBy(person => person.age),
      mergeMap(group => group.pipe(toArray()))
    );
    example.subscribe(val => this.output.push(val[0].name));
  }

}
