import { Observable } from 'rxjs';

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
  isChecked = true;
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Yellow' },
    { id: 4, name: 'Blue' }
  ];
  color = 2; 
  minDate = new Date(2019, 1, 1);
  maxDate = new Date(2019, 10, 31);

  categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
    { name: 'Diabolical' },
  ];
  isLoading = false;

  constructor(private data1: PlaygroundsService) {

  }


  selectCategory(category) {
    this.categories
      .filter(c => c != category)
      .forEach(c => c['selected'] = false)

      category.selected = !category.selected;
  }

  onChange($event) {
    console.log($event);
  }

  ngOnInit() { 
    this.data1.getUsers().subscribe(
      data => this.playgrounds = data
    )
  }

  calculateAge(lastName: string) {
    return lastName.length;
  }

  transformPerson(person: any) {
    return {
      ...person,
      age: this.calculateAge(person.last_name),
    };
  }

  // messWithData() {
  //   this.playgroundService.getPlaygrounds()
  //     .then((res: any[]) => {
  //       // debugger;
  //       this.playgrounds = res.filter(data => data.id % 2 === 0)
  //         .filter(data => data.gender === 'Male')
  //         .map(person => this.transformPerson(person));
  //     })
  //     .catch(err => { this.err = err })

  //   // debugger;
  // }


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
