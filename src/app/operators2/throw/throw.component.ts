import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.scss']
})
export class ThrowComponent implements OnInit {
  output = [];

  constructor() {}

  ngOnInit() {
    // Throw - Emit error on subscription.

    const source = throwError('This is an error!');
    source.subscribe({
      next: val => this.output.push(val),
      complete: () => this.output.push('Complete!'),
      error: val => this.output.push(`Error: ${val}`)
    });
  }
}
