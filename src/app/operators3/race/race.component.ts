import { Component, OnInit } from '@angular/core';
import { mapTo } from 'rxjs/operators';
import { interval, race} from 'rxjs';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // The observable to emit first is used.

    const example = race(
      interval(1500),
      interval(1000).pipe(mapTo(13)),
      interval(2000),
      interval(2500)
    );
     example.subscribe(val => this.output.push(val));
  }
}
