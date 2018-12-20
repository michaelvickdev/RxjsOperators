import { Component, OnInit } from '@angular/core';
import { defaultIfEmpty } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.scss']
})
export class DefaultIfEmptyComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Emit given value if nothing is emitted before completion.
    const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));

    exampleOne.subscribe(val => this.output.push(val));
  }
}
