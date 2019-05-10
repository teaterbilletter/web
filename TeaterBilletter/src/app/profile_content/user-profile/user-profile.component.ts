import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../../model/customer';
import {RestapiService} from '../../service/restapi.service';
import {AuthService} from '../../auth.service';
import {UserService} from "../../service/user.service";
import {ChangeUserProfilComponent} from "./change-user-profil/change-user-profil.component";
import {Show} from '../../../model/show';
import {Booking} from '../../../model/booking';
import {DatePipe} from '@angular/common';

@Component({
  providers: [ChangeUserProfilComponent],
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public bookings: Array<Booking> = new Array<Booking>();
  public customer: Customer;
  public changeProfile: boolean = false;
  public isLoggedIn: boolean = false;
  public userAdress: string;
  public userEmail: string;

  constructor(
    private client: HttpClient,
    private restapi: RestapiService,
    private authService: AuthService,
    private userService: UserService,
    private changeUserComponent: ChangeUserProfilComponent,
    private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.client.get<Customer>(this.restapi.customerUrl().concat(this.authService.getUserId())).subscribe(customer => {
      this.customer = customer;
      this.userService.setuserAdresse(customer.address);
      this.userService.setUserEmail(customer.email);
    });

    this.client.get<Booking[]>(this.restapi.bookingsUrl.concat(this.authService.getUserId())).subscribe(bookings => {
      this.bookings = bookings;
      console.log(bookings)
    });
  }

   public setShowProfileChangesPopUp() {
    this.changeProfile = true;
    this.isLoggedIn = true;
    this.changeUserComponent.ngOnInit();
  }

  public getShowProfileChangesPopUp(){
    if (this.isLoggedIn == true) {
      return this.changeProfile;
    }
  }
}
