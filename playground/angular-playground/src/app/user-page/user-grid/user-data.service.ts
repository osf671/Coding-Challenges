import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  constructor() {}

  getData() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
  }
}
