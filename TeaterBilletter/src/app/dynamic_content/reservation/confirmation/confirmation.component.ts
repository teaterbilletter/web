import { Component, OnInit } from '@angular/core';
import {ShowService} from '../../../service/show.service';
import {AuthService} from '../../../auth.service';
import {Booking} from '../../../../model/booking';
import {Seat} from '../../../../model/seat';
import {Show} from '../../../../model/show';
import {BookingService} from '../../../service/booking.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private showService: ShowService, private authService: AuthService, private bookingService: BookingService) { }

  ngOnInit() {
  }

  onPaymentButtonClicked() {
    let booking: Booking = new class implements Booking {
      bookingID: number;
      customerID: string;
      date: Date;
      seats: Array<Seat>;
      show: Show;
      totalPrice: number;
    }

    booking.bookingID = 123;
    booking.customerID = "s155576";
    booking.date = new Date(Date.parse(this.bookingService.date));
    booking.show = this.bookingService.show;
    booking.totalPrice = 500;

    let json = JSON.stringify(booking);
    console.log("Json is: " + json);
  }
}
