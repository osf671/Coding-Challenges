import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements OnInit {
  data;
  constructor() {}

  ngOnInit() {
    fetch("https://api.mockaroo.com/api/0c501690?count=10&key=ec35dd50")
      .then(res => res.json())
      .then(incomingData => {
        debugger;
        this.data = incomingData;
        return incomingData;
      })
      .catch(err => {
        console.log(err);
      });

    // const firstItem = this.data[0];
  }
}
