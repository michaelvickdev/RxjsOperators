import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.scss']
})
export class BehaviorComponent implements OnInit {
  public behaviorSubject: BehaviorSubject<any> = new BehaviorSubject(
    '1 value (initial)'
  );
  public output = [];

  constructor() {}

  ngOnInit() {
    // When you subscribe to a behavior subject, it will give you the last emitted value right away.
    this.behaviorSubject.next('2 value');
    this.behaviorSubject.next('3 value');
    this.behaviorSubject.next('4 value');

    this.behaviorSubject.asObservable().subscribe(data => {
      this.output.push('First subscriber got data >>>>> ' + data);
    });
    this.behaviorSubject.next('5 value');
    this.behaviorSubject.next('6 value');
  }
}
