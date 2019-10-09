import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-grid",
  templateUrl: "./user-grid.component.html",
  styleUrls: ["./user-grid.component.scss"]
})
export class UserGridComponent implements OnInit {
  public users: any[] = [
    {
      first: "Doug",
      last: "Shannon",
      img_url: "https://i.imgur.com/EazDpL3.gif",
      email: "Doug@gmail.com",
      gender: 'Male'
    },
    {
      first: "Ellayna",
      last: "Chenoweeeth",
      img_url: "https://i.imgur.com/e6PcuPS.jpg",
      email: "ellayna@gmail.com",
      gender: 'Female'
    },
    {
      first: "Tony",
      last: "Chou",
      img_url: "https://i.imgur.com/2hBebTU.jpg",
      email: "tony@gmail.com",
      gender: 'Male'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
