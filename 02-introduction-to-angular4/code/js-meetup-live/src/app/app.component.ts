import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div>
  <h1>{{pageTitle}}</h1>
  <my-meetups></my-meetups>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Welcome to Meetup';
}
