import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Emit single item that passes expression.

    const source = from([1, 2, 3, 4, 5]);
    const example = source.pipe(single(val => val === 4));
    example.subscribe(val => this.output.push(val));
  }
}
