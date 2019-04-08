import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public shows : number[];

  constructor() {
    this.shows = [1,2,3,4];
  }

  ngOnInit() {
  }

}
