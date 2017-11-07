import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <h1>
      {{person.name.forename}} {{person.name.surname}}
      ({{person.address.street}}, {{person.address.city}}, {{person.address.country}})
    </h1>
    <p>
      <input [value]="person.name.forename"
             (keyup)="person.name.forename=$event.target.value">

      <input [value]="person.name.surname"
             (input)="person.name.surname=$event.target.value">
    </p>
    <p>
      Street: <input [ngModel]="person.address.street"
                     (ngModelChange)="person.address.street=$event">
    </p>
    <p>
      City: <input [(ngModel)]="person.address.city">
    </p>
    <p>
      Country: <input bindon-ngModel="person.address.country">
    </p>
    <p>
      <button (click)="reset()">Reset</button>
    </p>
    <pre>
        {{person | json:2}}
    </pre>`
})
export class TwoWayBindingComponent {

  person: any;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.person = {
      name: {
        forename: 'John',
        surname: 'Doe'
      },
      address: {
        street: 'Lexington Avenue',
        city: 'New York',
        country: 'USA'
      }
    };
  }
}
