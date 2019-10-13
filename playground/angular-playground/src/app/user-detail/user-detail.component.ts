import { UserDataService } from './../user-page/user-grid/user-data.service';
import { User } from './../user-page/user';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private userDataService: UserDataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.userDataService.getUser(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
