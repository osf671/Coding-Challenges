import { UserPhotoService } from './user-photo.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"]
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  @Output() profileClicked: EventEmitter<null> = new EventEmitter();

  public photos: any[];

  constructor(private userPhotoService: UserPhotoService) {}

  ngOnInit() {
    this.userPhotoService
    .getPhoto()
    .then((incomingPhoto: any[]) => {
      this.photos = incomingPhoto.filter(p => p.id === 1999);
    })
    .catch(err => {
      console.log(err);
    });
  }

  profileButtonClicked() {
    this.profileClicked.emit();
  }
}
