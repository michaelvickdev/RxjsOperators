import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  values = [];

  constructor() { }

  ngOnInit() {
    // Emit variable amount of values in a sequence and then emits a complete notification.
    const source = of(1, 'TEST', 3, 4, 5);

    source.pipe().subscribe(val => {
      this.values.push(val);
    });
  }

}
