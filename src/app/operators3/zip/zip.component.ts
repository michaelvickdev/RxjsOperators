import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // After all observables emit, emit values as an array

    const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    const sourceThree = of('Goodbye');
    const sourceFour = of('World!');
    const example = zip(
      sourceOne,
      sourceTwo.pipe(delay(1000)),
      sourceThree.pipe(delay(2000)),
      sourceFour.pipe(delay(3000))
    );
    example.subscribe(val => this.output.push(val));
  }
}
