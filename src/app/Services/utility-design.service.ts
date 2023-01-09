import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityDesignService {

  constructor() { }

  addPrint(data:string, elId:string){
    let el = document.createElement('li');
    el.innerText= data;
    document.getElementById(elId)?.append(el)
  }
}
