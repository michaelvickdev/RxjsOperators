import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.scss']
})
export class DoComponent implements OnInit {

  output = [];

  constructor() { }

  ngOnInit() {
    // Transparently perform actions or side-effects, such as logging.
    // 'do' does not transform values
    const source = of(1, 2, 3, 4, 5);
    const example = source.pipe(
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      map(val => val + 10),
      tap(val => console.log(`AFTER MAP: ${val}`))
    );

    const subscribe = example.subscribe(val => this.output.push(val));
  }

}
