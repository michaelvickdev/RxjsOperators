import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-mapto',
  templateUrl: './mapto.component.html',
  styleUrls: ['./mapto.component.scss']
})
export class MaptoComponent implements OnInit {

  output = [];
  output2 = [];

  constructor() { }

  ngOnInit() {

    // Map - Apply projection with each value from source.
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    const example = source.pipe(map(({ name }) => name + '_new'));

    example.subscribe(val => this.output.push(val));

    // MapTo - Map emissions to constant value.
    const source2 = interval(2000);
    // map all emissions to one value

    const example2 = source2.pipe(mapTo('HELLO WORLD!'));
    example2.subscribe(val => this.output2.push(val));
  }

}
