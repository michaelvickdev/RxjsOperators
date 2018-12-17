import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {

  output = [];

  constructor() { }

  ngOnInit() {
    // Emit given value first.

    const source = of(1, 2, 3);
    const example = source.pipe(startWith('start!'));
    example.subscribe(val => this.output.push(val));
  }

}
