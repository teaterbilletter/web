import { Component, OnInit } from '@angular/core';
import {VisualComponentService} from '../../../visualComponent.service';
import {BookingService} from '../../../service/booking.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-available-time',
  templateUrl: './available-time.component.html',
  styleUrls: ['./available-time.component.css']
})
export class AvailableTimeComponent implements OnInit {

  constructor(private visualService: VisualComponentService, public bookingService: BookingService, public datePipe: DatePipe) { }

  ngOnInit() {
  }

  public updateTimeSlots() {

  }

  private setConfirmationMessage() {
    this.visualService.setConfirm(true);
  }

  private getConfirmationMessage() {
    return this.visualService.getConfirm();
  }
}
