import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../../model/customer';
import {RestapiService} from '../../service/restapi.service';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public shows : number[];
  public customer: Customer;

  constructor(private client: HttpClient, private restapi: RestapiService, private authService: AuthService) {
    this.shows = [1,2,3,4];
  }

  ngOnInit() {
    this.client.get<Customer>(this.restapi.customerUrl().concat(this.authService.getUserId())).subscribe(customer => {
      this.customer = customer;
    });
  }
}
