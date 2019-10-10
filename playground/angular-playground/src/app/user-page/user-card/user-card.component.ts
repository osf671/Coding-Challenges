import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  @Output() profileClicked: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  profileButtonClicked() {
    this.profileClicked.emit();
  }
}
