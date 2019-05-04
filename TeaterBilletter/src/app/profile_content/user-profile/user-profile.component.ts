import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public shows : number[];
  public customer: Customer;

  private baseUrl = "https://ticket.northeurope.cloudapp.azure.com/Customer/7";

  constructor(private client: HttpClient) {
    this.shows = [1,2,3,4];
  }

  ngOnInit() {
    this.client.get<Customer>(this.baseUrl).subscribe(customer => {
      this.customer = customer;
    });
  }
}
