import { Component } from '@angular/core';
import { select, Observable, AuthActions } from "../store"

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
  <pre>{{(user$ | async) | json}}</pre>`
})
export class AppComponent {

  @select(['auth', 'user']) user$: Observable<any>
  items: any;
  constructor(private aa: AuthActions) {
    this.items = "";
    this.aa.requestLogin({ name: "noman" })
  }
}
