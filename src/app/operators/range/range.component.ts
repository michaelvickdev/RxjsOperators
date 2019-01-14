import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  values = [];

  constructor() { }

  ngOnInit() {
    // emit 2-10 in sequence, 10 numbers starts from 2
    const source = range(2, 10);

    source.pipe().subscribe(val => {
      this.values.push(val);
    });
  }
}
