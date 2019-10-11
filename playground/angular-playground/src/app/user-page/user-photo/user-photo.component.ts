import { UserPhotoService } from './user-photo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent implements OnInit {
  @Input() photo: any;
  
  public photos: any;

  constructor(private userPhotoService: UserPhotoService) { }

  ngOnInit() {
    this.userPhotoService
      .getPhoto()
      .then((incomingPhoto: any[]) => {
        this.photos = incomingPhoto.filter(p => p.id <= 10);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
