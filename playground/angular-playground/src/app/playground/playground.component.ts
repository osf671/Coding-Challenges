import { getTestBed } from "@angular/core/testing";
import { PlaygroundsService } from "./../playgrounds.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements OnInit {
  data;
  imageUrl =
    "https://i5.walmartimages.com/asr/d560bd0c-2a84-4306-b3e9-40a42d37289f_1.ed31767b441300cf35eb6dba56394690.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF";
  title = "List of users";
  playgrounds;
  colSpan = 2;
  isActive = true;

  constructor(service: PlaygroundsService) {
    this.playgrounds = service.getPlaygrounds();
  }

  ngOnInit() {}

  calculateAge(lastName: string) {
    return lastName.length;
  }

  transformPerson(person: any) {
    return {
      ...person,
      first_name: "Doug",
      age: this.calculateAge(person.last_name)
    };
  }

  getData() {
    fetch("https://api.mockaroo.com/api/03317cb0?count=100&key=c3e16910")
      .then(res => res.json())
      .then((incomingData: any[]) => {
        this.data = incomingData.map(data => this.transformPerson(data));
        return incomingData;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
