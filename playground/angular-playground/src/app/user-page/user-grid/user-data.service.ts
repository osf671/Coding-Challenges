import { USERS } from './../mock-users';
import { User } from './../user';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  constructor(private messageService: MessageService) { }

  // getData() {
  //   return fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
  // }

  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users')
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }

}
