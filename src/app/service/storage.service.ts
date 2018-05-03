import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    public setValueInLocalStorage(key, value){
        localStorage.setItem(key, value);
    }

    public getValueFromLocalStorage(key){
        return localStorage.getItem(key);
    }

    public clearStorage(){
        localStorage.clear()
    }
}
