import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Show} from '../../../model/show';
import {ShowService} from '../../service/show.service';
import {SeatingService} from '../../service/seating.service';

@Component({
  selector: 'app-frontpage-shows',
  templateUrl: './frontpage-shows.component.html',
  styleUrls: ['./frontpage-shows.component.css']
})
export class FrontpageShowsComponent implements OnInit {

  public showsUrl = "https://ticket.northeurope.cloudapp.azure.com:5443/AllShows";
  public shows: Array<Show>;

  constructor(private client: HttpClient, private showService: ShowService) { }

  ngOnInit() {
    this.client.get<Show[]>(this.showsUrl).subscribe(shows => {
      this.shows = shows;
    })
  }

  onShowClicked(showId) {
    this.showService.setShowId(showId.toString());
  }
}
