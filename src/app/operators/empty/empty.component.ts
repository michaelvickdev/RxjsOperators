import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  values = [];

  constructor() { }

  ngOnInit() {
    // Makes observable that immediately completes (returns only comlete, emit no values).
    const subscribe = empty().pipe().subscribe({
      next: () => this.values.push('Next'),
      complete: () => this.values.push('Complete!')
    });
  }

}
