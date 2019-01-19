import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Ignore for given time then emit most recent value

    const source = fromEvent(document, 'click');
    const example = source.pipe(auditTime(1000));
    example.subscribe(val => this.output.push('Clicked'));
  }
}
