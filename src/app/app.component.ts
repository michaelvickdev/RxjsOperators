import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rxjs operators';

  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      // this.isScrolled = window.scrollY > 75;
    }
}
