import { UserDataService } from './../user-page/user-grid/user-data.service';
import { User } from './../user-page/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userDataService.getUsers().subscribe(users => this.users = users.slice(1, 5));
  }
}
