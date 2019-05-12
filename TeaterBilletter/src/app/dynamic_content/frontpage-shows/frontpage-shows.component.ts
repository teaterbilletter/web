import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Show} from '../../../model/show';
import {ShowService} from '../../service/show.service';
import {RestapiService} from '../../service/restapi.service';

@Component({
  selector: 'app-frontpage-shows',
  templateUrl: './frontpage-shows.component.html',
  styleUrls: ['./frontpage-shows.component.css']
})
export class FrontpageShowsComponent implements OnInit {

  public shows: Array<Show>;

  constructor(private client: HttpClient, private showService: ShowService, private restapi: RestapiService) { }

  ngOnInit() {
    this.client.get<Show[]>(this.restapi.allShows).subscribe(shows => {
      this.shows = shows;
    })
  }

  onShowClicked(showId) {
    this.showService.setShowId(showId.toString());
  }
}
