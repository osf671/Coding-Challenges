import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() user: any;
  @Output() returnClicked: EventEmitter<null> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  returnButtonClicked() {
    this.returnClicked.emit();
  }

}
