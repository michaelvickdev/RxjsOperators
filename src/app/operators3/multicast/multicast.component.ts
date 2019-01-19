import { Component, OnInit } from '@angular/core';
import { Subject, interval, timer } from 'rxjs';
import { publish, take, tap, multicast, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.scss']
})
export class MulticastComponent implements OnInit {
  output = [];
  output2 = [];
  output3 = [];

  constructor() {}

  ngOnInit() {
    // Share - Share source among multiple subscribers.

    const source2 = timer(1000);
    const example2 = source2.pipe(
      tap(() => this.output2.push('***SIDE EFFECT***')),
      mapTo('***RESULT***')
    );

    const subscribe2 = example2.subscribe(val => this.output2.push(val));
    const subscribeTwo2 = example2.subscribe(val => this.output2.push(val));
    const sharedExample2 = example2.pipe(share());
    const subscribeThree2 = sharedExample2.subscribe(val =>
      this.output2.push(val)
    );
    const subscribeFour2 = sharedExample2.subscribe(val =>
      this.output2.push(val)
    );

    // Multicast - Share source utilizing the provided Subject.

    const source3 = interval(2000).pipe(take(5));

    const example3 = source3.pipe(
      tap(() => this.output3.push('Side Effect #1')),
      mapTo('Result!')
    );

    const multi = example3.pipe(multicast(() => new Subject()));

     multi.subscribe(val => this.output3.push(val));
     multi.subscribe(val => this.output3.push(val));
    // multi.connect();
  }
}
