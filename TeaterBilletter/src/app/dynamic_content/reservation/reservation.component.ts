import { Component, OnInit } from '@angular/core';
import {VisualComponentService} from '../../visualComponent.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BookingService} from '../../service/booking.service';
import {RestapiService} from '../../service/restapi.service';
import {AvailableTimeComponent} from './available-time/available-time.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public showTimeSlots = false;
  public showSeats = false;
  public showDatePicker = false;
  public showButtonForTimeSlots = false;
  public timeSlotsCalculated = false;

  constructor(public visualService: VisualComponentService,
              public client: HttpClient,
              public bookingService: BookingService,
              public restapi: RestapiService) { }

  ngOnInit() {
  }

  public GetShowTimeSlots() : boolean {
    return this.showTimeSlots && this.visualService.showSeats && this.timeSlotsCalculated;
  }

  public CalculateAvailableTimeSlots() {
    let params = new HttpParams();

    params = params.append('ShowID', this.bookingService.show.id.toString());
    params = params.append('seatStart', this.bookingService.seats[0].seat_number.toString());
    params = params.append('seatEnd', this.bookingService.seats[this.bookingService.seats.length - 1].seat_number.toString());
    params = params.append('rowNumber', this.bookingService.seats[0].row_number.toString());

    this.client.get<Array<string>>(this.restapi.availableDates, {params: params}).subscribe(dates => {
      this.showTimeSlots = true;
      this.timeSlotsCalculated = true;
      this.bookingService.availableTimes = dates;
      console.log(dates);
    }, error => {
      console.log(error);
    });
  }

  public SetShowSeats() {
    this.showSeats = true;
    this.visualService.setShowSeats(this.showSeats);
    this.showButtonForTimeSlots = true;
    this.showDatePicker = false;
  }

  public SetShowDatePicker() {
    this.visualService.setShowSeats(false);
    this.showDatePicker = true;
    this.showButtonForTimeSlots = false;
    this.timeSlotsCalculated = false;
    this.showSeats = false;
  }

  public GetShowSeats() {
    return this.visualService.showSeats;
  }

  public GetShowDatePicker() {
    return this.showDatePicker;
  }

  public GetShowButtonForTimeSlots() {
    return this.showButtonForTimeSlots;
  }
}
