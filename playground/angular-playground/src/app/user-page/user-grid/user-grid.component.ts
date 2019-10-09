import { UserDataService } from './user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {
  public users: any;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getData().then(incomingData => {
      this.users = incomingData;
      return incomingData;
    })
    .catch(err => {
      console.log(err);
    });
  }

}
