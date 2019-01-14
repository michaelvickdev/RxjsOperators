import { Component, OnInit } from '@angular/core';
import { Subject, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  public simpleSubject: Subject<any> = new Subject();
  public simpleSubjectForOutput: Subject<any> = new Subject();
  public output = [];

  constructor() {}

  ngOnInit() {
    // Subjects are observables themselves but what sets them apart is that they are also observers.
    // Two super features of a subject: data emission and multiple subscriptions:
    const interval1 = interval(3000);

    this.simpleSubject.subscribe({
      next: v => this.output.push(`observerA: ${v}`)
    });
    this.simpleSubject.subscribe({
      next: v => this.output.push(`observerB: ${v}`)
    });

    this.simpleSubject.next('1 value');

    interval1.subscribe(val => {
      this.simpleSubject.next('2 value');
    });

    this.simpleSubject.next('3 value');
  }

  // Don't do that or you subscribers will be able to "mess" with your // subject
  getData1(): Subject<any> {
    return this.simpleSubjectForOutput;
  }
  // Do this instead:
  getData2(): Observable<any> {
    return this.simpleSubjectForOutput.asObservable();
  }
}
