import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  output = [];
  output2 = [];

  constructor() {}

  ngOnInit() {
    // Create an observable with given subscription function.
    // Example 1: Observable that emits multiple values

    const hello = Observable.create(function(observer) {
      observer.next('Hello');
      observer.next('World');
    });

    hello.subscribe(val => this.output.push(val));

    // Example 2: Observable that emits even numbers on timer

    const evenNumbers = Observable.create(function(observer) {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);
      return () => clearInterval(interval);
    });
    const subscribe = evenNumbers.subscribe(val => this.output2.push(val));
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);

  }
}
