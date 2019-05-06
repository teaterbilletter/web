import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShowService} from '../../service/show.service';
import {Show} from '../../../model/show';
import {RestapiService} from '../../service/restapi.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  public show: Show;

  constructor(private client: HttpClient, private showService: ShowService, private restapi: RestapiService) { }

  ngOnInit() {
    //   let showId = this.showService.getShowId();
    //
    //   this.client.get<Show>(this.restapi.showUrl().concat(showId)).subscribe(show => {
    //   this.show = show;
    // });
  }

}
