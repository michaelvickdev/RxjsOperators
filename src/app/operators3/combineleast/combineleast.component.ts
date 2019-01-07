import { Component, OnInit } from '@angular/core';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combineleast',
  templateUrl: './combineleast.component.html',
  styleUrls: ['./combineleast.component.scss']
})
export class CombineleastComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // When any observable emits a value, emit the latest value from each.

    const timerOne = timer(1000, 4000);
    const timerTwo = timer(2000, 4000);
    const timerThree = timer(3000, 4000);

    const combined = combineLatest(timerOne, timerTwo, timerThree);

    combined.subscribe(([timerValOne, timerValTwo, timerValThree]) => {
      this.output.push(
        `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
      );
    });
  }
}
