import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public showTimeSlots = false;
  
  constructor() { }

  ngOnInit() {
  }

  public GetShowTimeSlots() : boolean {
    return this.showTimeSlots;
  }

  public CalculateAvailableTimeSlots() {
    this.showTimeSlots = true;
  }
}
