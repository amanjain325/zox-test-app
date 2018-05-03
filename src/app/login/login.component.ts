import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { URLS, OAUTH_KEY, LOCAL_STORAGE_CONSTANTS } from "../constant/constant";
import { StorageService } from "../service/storage.service";
declare let OAuth: any;
@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  constructor(
    private _router: Router,
    private _storageService: StorageService
  ) {}

  public ngOnInit() {
    OAuth.initialize(OAUTH_KEY);
  }

  public login(type) {
    let that = this;
    switch (type) {
      case "instagram":
        OAuth.popup("instagram").done(function(result) {
          if (result && result.access_token) {
            that._storageService.setValueInLocalStorage(LOCAL_STORAGE_CONSTANTS.access_token, result.access_token);
            that._router.navigate(["instagram"]);
          }
        });
        break;
      case "twitter":
        // OAuth.popup("twitter").done(function(result) {
        //   console.log(result);
        //   that._router.navigate(["twitter"]);
        // });
        alert('Under Developement');
        break;
    }
  }
}
