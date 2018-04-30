import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppState } from "./app.service";

@Component({
  selector: "app",
  template: `
    <header></header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
