import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import {
  buffer,
  bufferCount,
  bufferToggle,
  bufferWhen,
  bufferTime
} from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {
  output = [];
  output2 = [];
  output3 = [];
  output4 = [];
  output5 = [];

  constructor() {}

  ngOnInit() {
    // Buffer - Collect output values until provided observable emits, emit as array.

    const myInterval = interval(1000);
    const bufferBy = fromEvent(document, 'click');
    const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
    myBufferedInterval.subscribe(val =>
      this.output.push('Buffered Values:', val)
    );

    // BufferCount - Collect emitted values until provided number is fulfilled, emit as array.

    const source = interval(1000);
    const bufferThree = source.pipe(bufferCount(3));
    bufferThree.subscribe(val => this.output2.push('Buffered Values:', val));

    // BufferTime - Collect emitted values until provided time has passed, emit as array.

    const source1 = interval(500);
    const example1 = source1.pipe(bufferTime(2000));
    example1.subscribe(val => this.output3.push('Buffered with Time:', val));

    // BufferToggle - Toggle on to catch emitted values from source, toggle off to emit buffered values as array.

    const sourceInterval = interval(1000);
    const startInterval = interval(5000);
    const closingInterval = val => {
      this.output4.push(
        `Value ${val} emitted, starting buffer! Closing in 3s!`
      );
      return interval(3000);
    };
    const bufferToggleInterval = sourceInterval.pipe(
      bufferToggle(startInterval, closingInterval)
    );
    bufferToggleInterval.subscribe(val =>
      this.output4.push('Emitted Buffer:', val)
    );

    // BufferThen - Collect all values until closing selector emits, emit buffered values.

    const oneSecondInterval = interval(1000);
    const fiveSecondInterval = () => interval(5000);
    const bufferWhenExample = oneSecondInterval.pipe(
      bufferWhen(fiveSecondInterval)
    );
    bufferWhenExample.subscribe(val =>
      this.output5.push('Emitted Buffer: ', val)
    );
  }
}
