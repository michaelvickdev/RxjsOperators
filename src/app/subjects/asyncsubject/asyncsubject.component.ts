import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.scss']
})
export class AsyncsubjectComponent implements OnInit {
  public asyncSubject: AsyncSubject<any> = new AsyncSubject();
  public output = [];

  constructor() {}

  ngOnInit() {
    // The AsyncSubject is a variant where only the last value of the Observable execution is sent
    // to its observers, and only when the execution completes.

    this.asyncSubject.subscribe({
      next: v => this.output.push(`observerA: ${v}`)
    });
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    this.asyncSubject.next(4);
    this.asyncSubject.subscribe({
      next: v => this.output.push(`observerB: ${v}`)
    });
    this.asyncSubject.next(5);
    this.asyncSubject.complete();
  }
}
