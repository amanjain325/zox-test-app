import { Component, OnInit } from "@angular/core";
import { URLS } from "../constant/constant";
import { StorageService } from "../service/storage.service";
import { UserService } from "../service/user.service";
import { InstagramModel } from '../model/instagram.model';

@Component({
  selector: "twitter",
  templateUrl: "./twitter.component.html"
})
export class TwitterComponent {
  constructor(
    private _storageService: StorageService,
    private userService: UserService
  ) {}

}
