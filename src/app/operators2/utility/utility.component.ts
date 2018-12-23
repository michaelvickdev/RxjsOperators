import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // fromEvent - Turn event into observable sequence.

    const source = fromEvent(document, 'click');
    const example = source.pipe(map(event => `Click time: ${event.timeStamp}`));
    example.subscribe(val => this.output.push(val));
  }
}
