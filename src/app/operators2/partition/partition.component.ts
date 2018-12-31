import { Component, OnInit } from '@angular/core';
import { from, merge } from 'rxjs';
import { partition, map } from 'rxjs/operators';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Partition - Split one observable into two based on provided predicate.
    // BUG IN TS
    const source = from([1, 2, 3, 4, 5, 6]);
    // const [evens, odds] = source.pipe(partition(val => val % 2 === 0));

    // const subscribe = merge(
    //   evens.pipe(map(val => `Even: ${val}`)),
    //   odds.pipe(map(val => `Odd: ${val}`))
    // ).subscribe(val => this.output.push(val));
  }
}
