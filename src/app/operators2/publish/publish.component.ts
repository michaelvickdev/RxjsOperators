import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  output = [];

  constructor() { }

  ngOnInit() {

    const source = interval(1000);
const example = source.pipe(
  tap(_ => this.output.push('Do Something!')),
  publish()
);

const subscribe = example.subscribe(val =>
  console.log(`Subscriber One: ${val}`)
);
const subscribeTwo = example.subscribe(val =>
  console.log(`Subscriber Two: ${val}`)
);

setTimeout(() => {
  // example.connect();
}, 5000);


  }

}
