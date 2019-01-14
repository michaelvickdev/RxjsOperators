import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.scss']
})
export class ReplaysubjectComponent implements OnInit {
  public replaySubject: ReplaySubject<any> = new ReplaySubject(2);
  // public behaviorSubject: ReplaySubject<any> = new ReplaySubject(); or without params
  public output = [];

  constructor() {}

  ngOnInit() {
    // Replay Subjects keep a given number of historical values so that those values
    // can be replayed to new subscribers.
    this.replaySubject.next('1 value');
    this.replaySubject.next('2 value');
    this.replaySubject.next('3 value');
    this.replaySubject.asObservable().subscribe(data => {
      this.output.push('First subscriber got data >>>>> ' + data);
    });
    this.replaySubject.next('4 value');
  }
}
