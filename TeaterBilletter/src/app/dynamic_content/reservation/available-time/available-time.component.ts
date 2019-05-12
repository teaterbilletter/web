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

  private setConfirmationMessage(timeslot: string) {
    this.visualService.setConfirm(true);
    this.bookingService.date = timeslot;
  }

  private getConfirmationMessage() {
    return this.visualService.getConfirm();
  }
}
