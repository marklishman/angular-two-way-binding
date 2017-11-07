import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hello-world *ngIf="showSection('hello-world')"></app-hello-world>
    <app-two-way-binding *ngIf="showSection('two-way-binding')"></app-two-way-binding>
  `
})
export class AppComponent {

  showSection(name: string): boolean {
    if (!window.location.search) {
      return true;
    }
    const PARAM = window.location.search.substr(1);
    return PARAM === name;
  }
}
