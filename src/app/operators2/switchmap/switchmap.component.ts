import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // SwitchMap - Map to observable, complete previous inner observable, emit values.

    const source = timer(0, 5000);
    const example = source.pipe(switchMap(() => interval(500)));
    example.subscribe(val => this.output.push(val));
  }
}
