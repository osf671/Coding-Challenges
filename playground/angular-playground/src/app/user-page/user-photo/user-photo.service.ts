import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPhotoService {

  constructor() { }

  getPhoto() {
    return fetch("http://jsonplaceholder.typicode.com/photos").then(res => res.json())
  }
}
