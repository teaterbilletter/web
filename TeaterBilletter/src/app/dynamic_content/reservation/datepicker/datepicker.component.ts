import {Component, OnInit} from '@angular/core';
import {VisualComponentService} from '../../../visualComponent.service';
import {ShowService} from '../../../service/show.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RestapiService} from '../../../service/restapi.service';
import {Seat} from '../../../../model/seat';
import {SeatingService} from '../../../service/seating.service';
import {SeatingComponent} from '../seating/seating.component';

@Component({
  providers: [SeatingComponent],
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
    private restapi: RestapiService,
    private seatingService: SeatingService,
    private seatingComponent: SeatingComponent) { }

  ngOnInit() {
    setTimeout(() => {
      this.dates = this.showService.getShowDates();
    }, 500);
  }

  onSelectElementClicked() {
    this.visualService.setConfirm(true);

    let dateSelector: HTMLSelectElement = <HTMLSelectElement>document.getElementById("showDateSelector");
    let date: string = dateSelector.options[dateSelector.selectedIndex].text;

    var params = new HttpParams();
    params = params.append('dateTime', date);
    params = params.append('ShowID', this.showService.getShowId());

    this.client.get<Seat[]>(this.restapi.occupiedSeatsUrl(), {params: params}).subscribe( seats => {
      for (let seat of seats) {
        seat.occupied = true;
      }
      this.seatingService.setOccupiedSeats(seats);
      this.seatingComponent.updateOccupiedSeatsOnSeatVisualMap();
    }, error => {
      console.log(error.error);
    })

    this.visualService.setShowSeats(true);
  }
}
