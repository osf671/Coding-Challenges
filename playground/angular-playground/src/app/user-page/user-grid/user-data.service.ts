import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getData() {
    return fetch("https://api.mockaroo.com/api/0c501690?count=10&key=ec35dd50")
      .then(res => res.json())
      }
}

