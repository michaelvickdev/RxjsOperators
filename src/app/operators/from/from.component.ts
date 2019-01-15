import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  values = [];

  constructor() {}

  ngOnInit() {
    // Turn an array, promise, or iterable into an observable.
    const source = from('Hello world!');

    source.pipe().subscribe(val => {
      this.values.push(val);
    });
  }
}
