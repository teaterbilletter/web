import { Component, OnInit } from '@angular/core';
import {ShowService} from '../../../service/show.service';
import {AuthService} from '../../../auth.service';
import {Booking} from '../../../../model/booking';
import {Seat} from '../../../../model/seat';
import {Show} from '../../../../model/show';
import {BookingService} from '../../../service/booking.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestapiService} from '../../../service/restapi.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private showService: ShowService,
              private authService: AuthService,
              private bookingService: BookingService,
              private client: HttpClient,
              private restapi: RestapiService,
              private router: Router) { }

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

    booking.bookingID = 0;
    booking.customerID = this.authService.getUserId();
    booking.date = new Date(Date.parse(this.bookingService.date));
    booking.show = this.bookingService.show;
    booking.seats = this.bookingService.seats;
    booking.totalPrice = 500;

    let json = JSON.stringify(booking);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.client.post<Booking>(this.restapi.bookingUrl, json, httpOptions).subscribe((result: Booking) => {
      this.router.navigate(['/profile']);
    }, error => {
      console.log(error.error);
    });
  }
}
