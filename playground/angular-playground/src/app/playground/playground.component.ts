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
  playgrounds;

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
      age: this.calculateAge(person.last_name), 
    };
  }

  messWithData() {
    let newData = this.playgrounds.filter(data => data.id % 2 === 0)
                           .filter(data => data.gender === 'male');
    return newData;
  }

 

  // getData() {
  //   fetch("https://api.mockaroo.com/api/b05e9af0?count=30&key=c3e16910")
  //     .then(res => res.json())
  //     .then((incomingData: any[]) => {
  //       this.data = incomingData.filter(data => data.id > 15)
  //                               .map(data => this.transformPerson(data))
  //       return incomingData;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
}
