import { StorageService } from "./storage.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LOCAL_STORAGE_CONSTANTS } from '../constant/constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
      private _router: Router,
      private _storageService: StorageService
    ) {}

  canActivate() {
    if(this.isLoggedIn()){
        return true;
    } else{
        this._router.navigate(['/']);
        return false;
    }
  }

  isLoggedIn(): boolean {
    let access_token = this._storageService.getValueFromLocalStorage(LOCAL_STORAGE_CONSTANTS.access_token);
    return access_token ? true : false;
  }
}
