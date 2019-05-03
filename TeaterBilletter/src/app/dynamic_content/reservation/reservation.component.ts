import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public showTimeSlots = false;
  public showSeats = false;
  public showDatePicker = false;

  constructor() { }

  ngOnInit() {
  }

  public GetShowTimeSlots() : boolean {
    return this.showTimeSlots && this.showSeats;
  }

  public CalculateAvailableTimeSlots() {
    this.showTimeSlots = true;
  }

  public SetShowSeats() {
    this.showSeats = true;
    this.showDatePicker = false;
  }

  public SetShowDatePicker() {
    this.showDatePicker = true;
    this.showSeats = false;
  }

  public GetShowSeats() {
    return this.showSeats;
  }

  public GetShowDatePicker() {
    return this.showDatePicker;
  }
}
