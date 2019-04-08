import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage-shows',
  templateUrl: './frontpage-shows.component.html',
  styleUrls: ['./frontpage-shows.component.css']
})
export class FrontpageShowsComponent implements OnInit {

  public shows : number[];

  constructor() {
    this.shows = [1, 2 ,3 ,4 , 5, 6, 7];
   }

  ngOnInit() {
  }

}
