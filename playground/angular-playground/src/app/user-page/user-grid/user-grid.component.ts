import { Component, OnInit } from "@angular/core";
import { User } from '../user';

@Component({
  selector: "app-user-grid",
  templateUrl: "./user-grid.component.html",
  styleUrls: ["./user-grid.component.scss"]
})
export class UserGridComponent implements OnInit {
  data:User[] = [];
  constructor() {

  }

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json:User[]) => {
        this.data = json;
        debugger
      })
      
  }
  
}
