import { UserDataService } from "./user-data.service";
import { Component, OnInit } from "@angular/core";
import { produce } from "immer";

@Component({
  selector: "app-user-grid",
  templateUrl: "./user-grid.component.html",
  styleUrls: ["./user-grid.component.scss"]
})
export class UserGridComponent implements OnInit {
  public users: any[];

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.userDataService
      .getData()
      .then((incomingData: any[]) => {
        this.users = incomingData.map(u => ({ ...u, showFront: true }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleCardForUser(user) {
    // uses Immer for non-mutation
    this.users = produce(this.users, draftUsers => {
      draftUsers.find(u => u.id === user.id).showFront = !user.showFront;
    });

    // Harder way for non-mutation
    // this.users = [
    //   ...this.users.slice(0, selectedUserIndex),
    //   { ...user, showFront: !user.showFront },
    //   ...this.users.slice(selectedUserIndex + 1)
    // ];
  }
}
