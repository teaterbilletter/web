import { Component, OnInit } from '@angular/core';
import {VisualComponentService} from '../../visualComponent.service';

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

  constructor(private visualService: VisualComponentService) { }

  ngOnInit() {
  }

  public GetShowTimeSlots() : boolean {
    return this.showTimeSlots && this.visualService.showSeats && this.timeSlotsCalculated;
  }

  public CalculateAvailableTimeSlots() {
    this.showTimeSlots = true;
    this.timeSlotsCalculated = true;
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
