import { StorageService } from "./../service/storage.service";
import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: "header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  public isHomePage: boolean = false;
  constructor(
    private _router: Router,
    private _storageService: StorageService
  ) {
    this._router.events
      .filter(val => val instanceof NavigationEnd)
      .subscribe((val: any) => {
        if (val && val.urlAfterRedirects == "/") {
          this.isHomePage = true;
        } else {
          this.isHomePage = false;
        }
      });
  }

  public clearStorage() {
    this._storageService.clearStorage();
  }
}
