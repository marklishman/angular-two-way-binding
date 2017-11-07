import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <div>
      <label>Name:</label>
      <input type="text" [(ngModel)]="name">
      <h1 [hidden]="!name">Hello {{name}}!</h1>
    </div>`
})
export class HelloWorldComponent {
  name = 'World';
}
