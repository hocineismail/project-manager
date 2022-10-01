import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public isEmptyData(key: string) {
    if (localStorage.getItem(key) === null) return true
    return false
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    
  }

  public clearData() {
    localStorage.clear();
  }


}
