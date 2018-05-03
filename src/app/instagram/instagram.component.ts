import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { URLS, LOCAL_STORAGE_CONSTANTS } from "../constant/constant";
import { StorageService } from "../service/storage.service";
import { UserService } from "../service/user.service";
import { InstagramModel } from '../model/instagram.model';

@Component({
  selector: "instagram",
  templateUrl: "./instagram.component.html"
})
export class InstagramComponent implements OnInit {
  constructor(
    private _router :Router,
    private _storageService: StorageService,
    private _userService: UserService
  ) {}
  public instaData: Array<any> = [];

  ngOnInit() {
    let access_token = this._storageService.getValueFromLocalStorage(LOCAL_STORAGE_CONSTANTS.access_token);
    let url = URLS.instagramUserDetails + "?access_token=" + access_token;
    this._userService.getCall(url).subscribe((data: any)=>{
      if(data.data){
        this.mapInstaData(data.data);
      }
    });
  }

  mapInstaData(data: any){
    if(data && Array.isArray(data) && data.length > 0){
      if(data.length > 5) {
        data = data.splice(0,5)
      }
      data.forEach((_data: any)=>{
        let _instaData:InstagramModel = <InstagramModel>{};        
        if(_data && _data.images && _data.images.standard_resolution && _data.images.standard_resolution.url){
          _instaData.imageUrl = _data.images.standard_resolution.url;
        }
        if(_data && _data.caption && _data.caption.text){
          _instaData.captionText = _data.caption.text;
        } 
        if(_data && _data.likes && _data.likes.count){
          _instaData.likesCount = _data.likes.count
        }
        if(_data && _data.link){
          _instaData.link = _data.link
        }
        this.instaData.push(_instaData);     
      })
    }
  }
}
