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
      img_url: "https://i.imgur.com/z8O2Af0b.jpg",
      email: "Doug@gmail.com",
      gender: 'Male',
      status: "Going to the mall. #textMeeeee"
    },
    {
      first: "Ellayna",
      last: "Chenoweeeth",
      img_url: "https://i.imgur.com/qkuiQf2.jpg",
      email: "ellayna@gmail.com",
      gender: 'Female',
      status: "Out for coffee"
    },
    {
      first: "Tony",
      last: "Chou",
      img_url: "https://i.imgur.com/2hBebTU.jpg",
      email: "tony@gmail.com",
      gender: 'Male',
      status: "Just got a new job!"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
