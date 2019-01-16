import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  output = [];

  constructor() { }

  ngOnInit() {
    // Select properties to emit.
    const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
    const example = source.pipe(pluck('name'));
    example.subscribe(val => this.output.push(val));
  }
}
