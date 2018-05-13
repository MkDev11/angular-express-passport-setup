import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css" ]
})
export class LoginComponent {

  apiUrl: string = `http://localhost:3000`;

  isSigning: boolean = false;

  constructor(private router: Router) {
  }


  signIn(evt: Event): void {
    evt.preventDefault();

    this.isSigning = true;
    this.router.navigate([ "home" ]);
  }
}
