import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Emit variable amount of values in a sequence and then emits a complete notification.
    // Example 1: Emitting a sequence of numbers

    const source = of(1, 2, 3, 4, 5);

    source.pipe().subscribe(val => {
      this.output.push(val);
    });

    // Example 2: Emitting an object, array, and function

    const source2 = of({ name: 'Brian' }, [1, 2, 3], function hello() {
      return 'Hello';
    });

    source2.subscribe(val => this.output.push(val));
  }
}
