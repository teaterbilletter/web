import {Component, OnInit} from '@angular/core';
import {VisualComponentService} from '../../../visualComponent.service';
import {ShowService} from '../../../service/show.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RestapiService} from '../../../service/restapi.service';
import {Seat} from '../../../../model/seat';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent implements OnInit {

  public dates: Array<Date> = new Array<Date>();

  constructor(
    private visualService: VisualComponentService,
    private showService: ShowService,
    private client: HttpClient,
    private restapi: RestapiService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dates = this.showService.getShowDates();
    }, 500);
  }

  onSelectElementClicked() {
    let dateSelector: HTMLSelectElement = <HTMLSelectElement>document.getElementById("showDateSelector");
    let date: string = dateSelector.options[dateSelector.selectedIndex].text;
    console.log(date);

    let params = new HttpParams();
    params.append('dateTime', date);
    params.append('ShowID', this.showService.getShowId());

    console.log("Base URL is: " + this.restapi.occupiedSeatsUrl());

    this.client.get<Seat[]>(this.restapi.occupiedSeatsUrl(), {params: params}).subscribe( seats => {
      console.log(seats);
    }, error => {
      console.log(error.error);
    })

    this.visualService.setShowSeats(true);
  }
}
