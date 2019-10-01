
import { PlaygroundsService } from "./../playgrounds.service";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "playground",
  templateUrl: "./playground.component.html",
  styleUrls: ["./playground.component.scss"]
})
export class PlaygroundComponent implements OnInit {
  data;
  imageUrl;
  playgrounds = null;
  err = null;

  constructor(private playgroundService: PlaygroundsService) {

  }

  ngOnInit() { }

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
    this.playgroundService.getPlaygrounds()
      .then((res: any[]) => {
        // debugger;
        this.playgrounds = res.filter(data => data.id % 2 === 0)
          .filter(data => data.gender === 'Male')
          .map(person => this.transformPerson(person));
      })
      .catch(err => { this.err = err })

    // debugger;
  }


  getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((incomingData: any[]) => {
        this.data = incomingData;
        // .filter(data => data.id > 15)
        // .map(data => this.transformPerson(data))
        return incomingData;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
