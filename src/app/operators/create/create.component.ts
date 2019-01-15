import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Create an observable with given subscription function.
    const hello = Observable.create(function(observer) {
      observer.next('Hello');
      observer.next('World');
    });

    hello.subscribe(val => this.output.push(val));
  }
}
